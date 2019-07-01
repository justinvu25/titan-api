import { UserInput } from '@/ts-types/user'

interface UserConnector {
	getAllUsers: Function
	registerUser: Function
}

class User {
	public connector: UserConnector

	constructor({ connector }: { connector: UserConnector }) {
		this.connector = connector
	}

	async getAllUsers(): Promise<object> {
		return this.connector.getAllUsers()
	}

	async registerUser(userData: UserInput): Promise<object> {
		return this.connector.registerUser(userData)
	}
}

export default User
