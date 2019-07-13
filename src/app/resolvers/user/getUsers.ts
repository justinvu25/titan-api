import { User as UserType } from '../../../ts-types/generated'
import { Context } from '../../../ts-types/context'

const getUsers = async (
	_parent: object,
	_args: undefined,
	context: Context,
): Promise<UserType> => {
	const {
		models: { User },
	} = context
	const users = await User.getAllUsers()
	return users
}

export default getUsers
