import User from '../../entities/user'
import { IUserInput } from '../../ts-types/user'

class UserConnector {
	async getAllUsers(): Promise<object> {
		try {
			const users = await User.find()
			return users
		} catch (err) {
			return err
		}
	}

	async createUser(userData: IUserInput): Promise<object> {
		try {
			const userToCreate = await User.create(userData)
			return userToCreate.toObject()
		} catch (err) {
			return err
		}
	}
}

export default UserConnector
