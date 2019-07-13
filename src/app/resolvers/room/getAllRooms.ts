import { Context } from '../../../ts-types/context'
import { Room as RoomPayload } from '../../../ts-types/generated'

const getAllRooms = async (
	_parent: object,
	_args: undefined,
	context: Context,
): Promise<RoomPayload[]> => {
	const {
		models: { Room },
	} = context

	const room = await Room.getAllRooms()
	return room
}

export default getAllRooms
