import { RoomInput, RoomPayload } from '../../ts-types/room'
import { Room as RoomType } from '../../ts-types/generated'

interface RoomConnector {
	createRoom: Function
	getRoomByUserId: Function
	addUserToRoom: Function
	getAllRooms: Function
	deleteRoomByRoomId: Function
	removeUserFromRoom: Function
	updateRoomByRoomId: Function
}

class Room {
	connector: RoomConnector

	constructor({ connector }: { connector: RoomConnector }) {
		this.connector = connector
	}

	async createRoom(roomInput: RoomInput): Promise<RoomPayload> {
		const room = await this.connector.createRoom(roomInput)
		return room
	}

	async getRoomForUser(userId: string): Promise<RoomPayload> {
		const room = await this.connector.getRoomByUserId(userId)
		return room
	}

	async addUserToRoom(pin: string, userId: string): Promise<RoomPayload> {
		const room = await this.connector.addUserToRoom(pin, userId)
		return room
	}

	async removeUserFromRoom(
		roomId: string,
		userId: string,
	): Promise<RoomPayload> {
		const room = await this.connector.removeUserFromRoom(roomId, userId)
		return room
	}

	async getAllRooms(): Promise<RoomPayload[]> {
		const room = await this.connector.getAllRooms()
		return room
	}

	async deleteRoomByRoomId(roomId: string): Promise<RoomPayload> {
		const room = await this.connector.deleteRoomByRoomId(roomId)
		return room
	}

	async updateRoomByRoomId(
		roomId: string,
		update: RoomType,
	): Promise<RoomPayload> {
		const room = await this.connector.updateRoomByRoomId(roomId, update)
		return room
	}
}

export default Room
