import { Context } from '@/ts-types/context'
import {
	DeleteRoomMutationArgs,
	DeleteRoomMutationPayload,
} from '@/ts-types/generated'

const deleteRoom = async (
	_parent: object,
	args: DeleteRoomMutationArgs,
	context: Context,
): Promise<DeleteRoomMutationPayload> => {
	const {
		models: { Room },
	} = context

	const {
		input: { roomId },
	} = args

	const { _id } = await Room.deleteRoomByRoomId(roomId)
	return {
		id: _id,
	}
}

export default deleteRoom
