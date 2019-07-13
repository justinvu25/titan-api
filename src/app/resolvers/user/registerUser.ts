import {
	RegisterUserMutationArgs,
	User as UserType,
} from '../../../ts-types/generated'
import { Context } from '../../../ts-types/context'

const registerUser = async (
	_parent: object,
	args: RegisterUserMutationArgs,
	context: Context,
): Promise<UserType> => {
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
