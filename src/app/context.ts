import UserModel from './models/userModel'

import UserConnector from './connectors/userConnector'

export default async ({ req }: any) => {
	const userConnector = new UserConnector()

	const models = {
		User: new UserModel({
			connector: userConnector,
		}),
	}

	return {
		models,
	}
}
