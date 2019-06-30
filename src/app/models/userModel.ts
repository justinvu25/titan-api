import { IUserInput } from '../../ts-types/user'

class User {
	connector: any
	constructor({ connector }: any) {
		this.connector = connector
	}

	async getAllUsers() {
		return this.connector.getAllUsers()
	}

	async createUser(userData: IUserInput) {
		return this.connector.createUser(userData)
	}
}

export default User
