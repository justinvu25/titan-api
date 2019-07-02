import { Context } from '@/ts-types/context'
import { Room as RoomPayload, JoinRoomMutationArgs } from '@/ts-types/generated'

const addUserToRoom = async (
	_parent: object,
	args: JoinRoomMutationArgs,
	context: Context,
): Promise<RoomPayload> => {
	const {
		models: { Room },
		user: { id },
	} = context

	const {
		input: { pin },
	} = args

	const room = await Room.addUserToRoom(pin, id)
	return room
}

export default addUserToRoom
