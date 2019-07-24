import { Context } from '../../../ts-types/context'
import {
	Room as RoomType,
	StartSessionMutationArgs,
} from '../../../ts-types/generated'

const startSessionForRoomResolver = async (
	_parent: object,
	args: StartSessionMutationArgs,
	context: Context,
): Promise<RoomType> => {
	const {
		models: { Room },
	} = context
	const {
		input: { roomId },
	} = args
	const room = await Room.updateRoomByRoomId(roomId, { sessionStarted: true })
	return room
}

export default startSessionForRoomResolver
