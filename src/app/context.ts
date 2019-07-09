import { PubSub } from 'apollo-server-express'

import UserModel from './models/userModel'
import UserConnector from './connectors/userConnector'
import RoomModel from './models/roomModel'
import RoomConnector from './connectors/roomConnector'

import { decodeJwt } from '@/utils/jwtHelpers'
import { RequestContext } from '@/ts-types/context'
import { Maybe } from '@/ts-types/generated'

const pubsub = new PubSub()

interface ContextReturnPayload {
	models: object
	user?: Maybe<object>
	pubsub: PubSub
}

const context = async ({
	req,
	connection,
}: {
	req: RequestContext
	connection: any
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
			user: decodeJwt(connection.context.Authorization),
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
