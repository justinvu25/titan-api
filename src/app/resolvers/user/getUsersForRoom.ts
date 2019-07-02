import { User as UserPayload, Room } from '@/ts-types/generated'
import { Context } from '@/ts-types/context'

const getUsersForRoom = async (
	parent: Room,
	_args: undefined,
	context: Context,
): Promise<UserPayload[]> => {
	const { userIds } = parent
	const {
		models: { User },
	} = context

	const users = await User.getUsersByRoom(userIds)
	return users
}

export default getUsersForRoom
