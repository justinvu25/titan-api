import { LoginCredentials, LoginPayload } from '@/ts-types/user'
import { Context } from '@/ts-types/context'

const login = async (
	_parent: object,
	args: { input: LoginCredentials },
	context: Context,
): Promise<LoginPayload> => {
	const {
		models: { User },
	} = context
	const { email, password } = args.input
	const loginPayload = await User.login({ email, password })
	return loginPayload
}

export default login
