import { IUserInput } from '../../../ts-types/user'

const registerUser = async (
	_parent: object,
	args: { input: IUserInput },
	context: any,
) => {
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
