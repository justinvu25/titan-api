import UserModel from './models/userModel'
import UserConnector from './connectors/userConnector'
import RoomModel from './models/roomModel'
import RoomConnector from './connectors/roomConnector'

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
	const roomConnector = new RoomConnector()

	const models = {
		User: new UserModel({
			connector: userConnector,
		}),
		Room: new RoomModel({
			connector: roomConnector,
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
