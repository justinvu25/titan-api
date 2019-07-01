import { Context } from '@/ts-types/context'
import { DeleteUserPayload } from '@/ts-types/generated'

const deleteUser = async (
	_parent: object,
	_args: undefined,
	context: Context,
): Promise<DeleteUserPayload> => {
	const {
		models: { User },
		user,
	} = context

	const { _id } = await User.deleteUser(user.id)
	return {
		id: _id,
	}
}

export default deleteUser
