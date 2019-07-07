import {
	getUsers,
	getUser,
	updateUserResolver,
	registerUser,
	login,
	deleteUser,
	getUsersForRoom,
} from './user'
import {
	createRoomResolver,
	getRoomForUser,
	addUserToRoom,
	getAllRooms,
	deleteRoom,
	roomOwnerResolver,
} from './room'

const mutationResolvers = {
	registerUser,
	updateUser: updateUserResolver,
	deleteUser,
	login,
	createRoom: createRoomResolver,
	joinRoom: addUserToRoom,
	deleteRoom,
}

const commonResolvers = {
	Room: {
		party: getUsersForRoom,
		roomOwner: roomOwnerResolver,
	},
	User: {
		room: getRoomForUser,
	},
}

const resolver = {
	...commonResolvers,
	Query: {
		users: getUsers,
		user: getUser,
		rooms: getAllRooms,
	},
	Mutation: mutationResolvers,
}

export default resolver
