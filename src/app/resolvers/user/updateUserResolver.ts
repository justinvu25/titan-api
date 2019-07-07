import { Context } from '@/ts-types/context'
import { User as UserType, UpdateUserMutationArgs } from '@/ts-types/generated'

const updateUserResolver = async (
	_parent: object,
	args: UpdateUserMutationArgs,
	context: Context,
): Promise<UserType> => {
	const {
		models: { User },
		user: { id },
	} = context

	const { input } = args

	const user = await User.updateUser(id, input)
	return user
}

export default updateUserResolver
