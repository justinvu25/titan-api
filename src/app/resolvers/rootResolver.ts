import { getUsers, getUser, registerUser, login, deleteUser } from './user'

const mutationResolvers = {
	registerUser,
	deleteUser,
	login,
}

const resolver = {
	Query: {
		users: getUsers,
		user: getUser,
	},
	Mutation: mutationResolvers,
}

export default resolver
