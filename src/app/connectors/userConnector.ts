import User from '@/entities/user'
import { UserInput, UserPayload } from '@/ts-types/user'

class UserConnector {
	async createUser(userData: UserInput): Promise<UserPayload> {
		const user = await User.create({
			name: userData.name,
			email: userData.email,
			password: userData.email,
		})
		return user
	}

	async getAllUsers(): Promise<UserPayload[]> {
		const users = await User.find()
		return users
	}

	async findUserByEmail(email: string): Promise<UserPayload> {
		const user = await User.findOne({ email })
		return user
	}
}

export default UserConnector
