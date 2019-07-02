import {
	getUsers,
	getUser,
	registerUser,
	login,
	deleteUser,
	getUsersForRoom,
} from './user'
import { createRoom, getRoomForUser, addUserToRoom } from './room'

const mutationResolvers = {
	registerUser,
	deleteUser,
	login,
	createRoom,
	joinRoom: addUserToRoom,
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
	},
	Mutation: mutationResolvers,
}

export default resolver
