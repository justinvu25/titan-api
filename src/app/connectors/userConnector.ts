import * as bcrypt from 'bcrypt'
import User from '@/entities/user'
import { UserInput, UserPayload } from '@/ts-types/user'
import { SALT_ROUNDS } from '@/utils/constants'

class UserConnector {
	static async getAllUsers(): Promise<UserPayload[]> {
		const users = await User.find()
		return users
	}

	static async registerUser(userData: UserInput): Promise<UserPayload> {
		const { name, password, email } = userData
		const user = await User.findOne({ email })

		if (!user) {
			const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS)
			if (hashedPassword) {
				const createdUser = await User.create({
					name,
					email,
					password: hashedPassword,
				})
				return createdUser
			}
			throw new Error('User could not be created.')
		}
		throw new Error('User already exists.')
	}
}

export default UserConnector
