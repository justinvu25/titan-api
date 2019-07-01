import { UserInput, UserPayload } from '@/ts-types/user'
import { Context } from '@/ts-types/context'

const registerUser = async (
	_parent: object,
	args: { input: UserInput },
	context: Context,
): Promise<UserPayload> => {
	const {
		models: { User },
	} = context

	const {
		input: { name, email, password },
	} = args
	const user = await User.registerUser({ name, email, password })
	return user
}

export default registerUser
