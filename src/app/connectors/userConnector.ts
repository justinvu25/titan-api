import User from '../../entities/user'
import { UserInput, UserPayload, UpdateUserInput } from '../../ts-types/user'

class UserConnector {
	async createUser(userData: UserInput): Promise<UserPayload> {
		const { name, email, password } = userData
		const user = await User.create({
			name,
			email,
			password,
		})
		return user
	}

	async getAllUsers(): Promise<UserPayload[]> {
		const users = await User.find()
		return users
	}

	async findUsersByUserIds(userIds: string[]): Promise<UserPayload[]> {
		const users = await this.getAllUsers()

		return users.filter(
			(user): boolean => {
				const { _id: userId } = user
				return userIds.includes(userId.toString())
			},
		)
	}

	async findUserByEmail(email: string): Promise<UserPayload> {
		const user = await User.findOne({ email })
		return user
	}

	async findUserById(id: string): Promise<UserPayload> {
		const user = await User.findById(id)
		return user
	}

	async findUserByIdAndUpdate(
		id: string,
		update: UpdateUserInput,
	): Promise<UserPayload> {
		const user = await User.findByIdAndUpdate(id, { ...update }, { new: true })
		return user
	}

	async deleteUser(userId: string): Promise<UserPayload> {
		const user = await User.findByIdAndDelete(userId)
		return user
	}
}

export default UserConnector
