import UserModel from './models/userModel'
import UserConnector from './connectors/userConnector'
import RoomModel from './models/roomModel'
import RoomConnector from './connectors/roomConnector'

import pubsub from '../pubsub/pubsub'

import { decodeJwt } from '../utils/jwtHelpers'
import { Pubsub } from '../ts-types/pubsub'
import { RequestContext, ConnectionContext } from '../ts-types/context'
import { Maybe } from '../ts-types/generated'

interface ContextReturnPayload {
	models: object
	user?: Maybe<object>
	pubsub: Pubsub
}

const context = async ({
	req,
	connection,
}: {
	req: RequestContext
	connection: ConnectionContext
}): Promise<ContextReturnPayload> => {
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

	if (connection) {
		return {
			models,
			pubsub,
			user: decodeJwt(connection.context.authorization),
			...connection.context,
		}
	}

	const user = decodeJwt(req.headers.authorization)
	const userData = user ? { user } : {}
	return {
		models,
		pubsub,
		...userData,
	}
}

export default context
