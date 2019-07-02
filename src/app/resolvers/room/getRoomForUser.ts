import { Room as RoomType } from '@/ts-types/generated'
import { Context } from '@/ts-types/context'

const getRoomForUser = async (
	_parent: object,
	_args: undefined,
	context: Context,
): Promise<RoomType> => {
	const {
		models: { Room },
		user,
	} = context

	const { id } = user

	const room = await Room.getRoomForUser(id)
	return room
}

export default getRoomForUser
