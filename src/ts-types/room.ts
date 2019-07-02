export interface RoomInput {
	name: string
	userId: string
}

export interface RoomPayload {
	name: string
	userIds: string[]
	pin: string
	sessionStarted: boolean
	votingCompleted: boolean
}
