import { Context } from '@/ts-types/context'
import { DeleteUserMutationArgs, DeleteUserPayload } from '@/ts-types/generated'

const deleteUser = async (
	_parent: object,
	args: DeleteUserMutationArgs,
	context: Context,
): Promise<DeleteUserPayload> => {
	const {
		models: { User },
	} = context

	const {
		input: { id },
	} = args
	const { _id } = await User.deleteUser(id)
	return {
		id: _id,
	}
}

export default deleteUser
