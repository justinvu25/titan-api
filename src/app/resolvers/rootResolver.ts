import {
	getUsers,
	getUser,
	registerUser,
	login,
	deleteUser,
	getUsersForRoom,
} from './user'
import {
	createRoom,
	getRoomForUser,
	addUserToRoom,
	getAllRooms,
	deleteRoom,
} from './room'

const mutationResolvers = {
	registerUser,
	deleteUser,
	login,
	createRoom,
	joinRoom: addUserToRoom,
	deleteRoom,
}

const commonResolvers = {
	Room: {
		users: getUsersForRoom,
	},
}

const resolver = {
	...commonResolvers,
	Query: {
		users: getUsers,
		user: getUser,
		room: getRoomForUser,
		rooms: getAllRooms,
	},
	Mutation: mutationResolvers,
}

export default resolver
