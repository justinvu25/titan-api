import { getUsers, getUser, registerUser, login, deleteUser } from './user'
import { createRoom } from './room'

const mutationResolvers = {
	registerUser,
	deleteUser,
	login,
	createRoom,
}

const resolver = {
	Query: {
		users: getUsers,
		user: getUser,
	},
	Mutation: mutationResolvers,
}

export default resolver
