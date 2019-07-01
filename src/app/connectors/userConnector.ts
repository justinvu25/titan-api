import User from '../../entities/user'
import { IUserInput } from '@/ts-types/user'
import * as bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '../../utils/constants'

class UserConnector {
	async getAllUsers(): Promise<object> {
		try {
			const users = await User.find()
			return users
		} catch (err) {
			return err
		}
	}

	async registerUser(userData: IUserInput): Promise<object> {
		const { name, password, email } = userData
		const user = await User.findOne({ email })
		if (!user) {
			const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS)
			console.log('hashed password', hashedPassword)
			if (hashedPassword) {
				const createdUser = await User.create({
					name,
					email,
					password: hashedPassword,
				})
				return createdUser
			} else {
				throw new Error('User could not be created')
			}
		}
	}
}

export default UserConnector
