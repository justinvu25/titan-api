import Room from '@/entities/room'
import { RoomInput, RoomPayload } from '@/ts-types/room'
import pinGenerator from '@/utils/pinGenerator'

class RoomConnector {
	async createRoom(roomInput: RoomInput): Promise<RoomPayload> {
		const { name, userId } = roomInput
		const room = await Room.create({
			name,
			userIds: [userId],
			pin: pinGenerator(),
		})
		return room
	}
}

export default RoomConnector
