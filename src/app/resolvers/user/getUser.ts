import { Context } from '@/ts-types/context'
import { UserPayload } from '@/ts-types/user'

const getUser = async (
	_parent: object,
	_args: undefined,
	context: Context,
): Promise<UserPayload> => {
	const {
		models: { User },
		user: { id },
	} = context

	const user = await User.getUser(id)
	return user
}

export default getUser
