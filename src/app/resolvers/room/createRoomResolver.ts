import { CreateRoomMutationArgs, Room as RoomType } from '@/ts-types/generated'
import { Context } from '@/ts-types/context'

const createRoom = async (
	_parent: object,
	args: CreateRoomMutationArgs,
	context: Context,
): Promise<RoomType> => {
	const {
		models: { Room },
		user: { id },
	} = context

	const {
		input: { name },
	} = args

	const room = await Room.createRoom({
		name,
		userId: id,
	})

	return room
}

export default createRoom
