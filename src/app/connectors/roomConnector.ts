import Room from '../../entities/room'
import { RoomInput, RoomPayload } from '../../ts-types/room'
import pinGenerator from '../../utils/pinGenerator'

class RoomConnector {
	async createRoom(roomInput: RoomInput): Promise<RoomPayload> {
		const { name, userId } = roomInput
		const room = await Room.create({
			name,
			userIds: [userId],
			pin: pinGenerator(),
			roomOwner: userId,
		})
		return room
	}

	async getRoomByUserId(userId: string): Promise<RoomPayload> {
		const room = await Room.findOne({ userIds: userId })
		return room
	}

	async addUserToRoom(pin: string, userId: string): Promise<RoomPayload> {
		const room = await Room.findOneAndUpdate(
			{ pin },
			{ $push: { userIds: userId } },
		)
		return room
	}

	async removeUserFromRoom(
		roomId: string,
		userId: string,
	): Promise<RoomPayload> {
		const room = await Room.findOneAndUpdate(
			{ _id: roomId },
			{ $pull: { userIds: userId } },
		)
		return room
	}

	async getAllRooms(): Promise<RoomPayload[]> {
		const room = await Room.find()
		return room
	}

	async deleteRoomByRoomId(roomId: string): Promise<RoomPayload> {
		const room = await Room.findByIdAndDelete(roomId)
		return room
	}
}

export default RoomConnector
