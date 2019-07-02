import {
	getUsers,
	getUser,
	registerUser,
	login,
	deleteUser,
	getUsersForRoom,
} from './user'
import { createRoom, getRoomForUser } from './room'

const mutationResolvers = {
	registerUser,
	deleteUser,
	login,
	createRoom,
}

const resolver = {
	Room: {
		users: getUsersForRoom,
	},
	Query: {
		users: getUsers,
		user: getUser,
		room: getRoomForUser,
	},
	Mutation: mutationResolvers,
}

export default resolver
