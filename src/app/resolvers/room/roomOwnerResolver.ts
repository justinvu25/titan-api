import { Context } from '@/ts-types/context'
import { User as UserType, Room } from '@/ts-types/generated'

const roomOwnerResolver = async (
	parent: Room,
	_args: undefined,
	context: Context,
): Promise<UserType> => {
	const {
		models: { User },
	} = context
	const { roomOwner: roomOwnerId } = parent

	const roomOwner = await User.getUser(roomOwnerId)

	return roomOwner
}

export default roomOwnerResolver
