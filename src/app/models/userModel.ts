import {
	UserInput,
	LoginCredentials,
	LoginPayload,
	UserPayload,
} from '@/ts-types/user'

interface UserConnector {
	getAllUsers: Function
	registerUser: Function
	login: Function
}

class User {
	public connector: UserConnector

	constructor({ connector }: { connector: UserConnector }) {
		this.connector = connector
	}

	async getAllUsers(): Promise<UserPayload[]> {
		return this.connector.getAllUsers()
	}

	async registerUser(userData: UserInput): Promise<UserPayload> {
		return this.connector.registerUser(userData)
	}

	async login(loginCredentials: LoginCredentials): Promise<LoginPayload> {
		return this.connector.login(loginCredentials)
	}
}

export default User
