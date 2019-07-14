import { Context } from '../../../ts-types/context'
import {
	LeaveRoomMutationArgs,
	LeaveRoomMutationPayload,
} from '../../../ts-types/generated'

const leaveRoomResolver = async (
	_parent: object,
	args: LeaveRoomMutationArgs,
	context: Context,
): Promise<LeaveRoomMutationPayload> => {
	const {
		input: { roomId },
	} = args
	const {
		models: { Room },
		user,
	} = context

	const userId = user.id

	const response = await Room.removeUserFromRoom(roomId, userId)
	if (response) {
		return {
			success: true,
		}
	}
	return {
		success: false,
	}
}

export default leaveRoomResolver
