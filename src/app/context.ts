import UserModel from './models/userModel'
import UserConnector from './connectors/userConnector'

import { decodeJwt } from '@/utils/jwtHelpers'
import { RequestContext } from '@/ts-types/context'
import { Maybe } from '@/ts-types/generated'

export default ({
	req,
}: {
	req: RequestContext
}): { models: object; user?: Maybe<object> } => {
	const user = decodeJwt(req.headers)

	const userConnector = new UserConnector()

	const models = {
		User: new UserModel({
			connector: userConnector,
		}),
	}
	if (user) {
		return {
			models,
			user,
		}
	}

	return {
		models,
	}
}
