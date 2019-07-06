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
		party: getUsersForRoom,
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
