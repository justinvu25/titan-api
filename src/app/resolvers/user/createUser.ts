import { IUserInput } from '../../../ts-types/user'

const createUser = async (
	_parent: object,
	args: { input: IUserInput },
	context: any,
) => {
	const {
		models: { User },
	} = context

	const {
		input: { name, email },
	} = args
	const user = await User.createUser({ name, email })
	return user
}

export default createUser
