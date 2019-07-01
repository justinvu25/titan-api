import { IUserInput } from '../../ts-types/user'

class User {
	connector: any
	constructor({ connector }: any) {
		this.connector = connector
	}

	async getAllUsers() {
		return this.connector.getAllUsers()
	}

	async registerUser(userData: IUserInput) {
		return this.connector.registerUser(userData)
	}
}

export default User
