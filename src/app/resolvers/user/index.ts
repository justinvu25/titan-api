import getUsers from './getUsers'
import createUser from './createUser'

export default {
	Query: {
		users: getUsers,
	},
	Mutation: {
		createUser,
	},
}
