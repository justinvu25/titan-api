import UserModel from './models/userModel'

import UserConnector from './connectors/userConnector'

export default (): { models: object } => {
	const userConnector = new UserConnector()

	const models = {
		User: new UserModel({
			connector: userConnector as any,
		}),
	}

	return {
		models,
	}
}
