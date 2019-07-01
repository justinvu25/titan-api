import { UserPayload } from '@/ts-types/user'
import { Context } from '@/ts-types/context'

const getUsers = async (
	_parent: object,
	_args: undefined,
	context: Context,
): Promise<UserPayload> => {
	const {
		models: { User },
	} = context
	const users = await User.getAllUsers()
	return users
}

export default getUsers
