import getUsers from './user/getUsers'
import createUser from './user/createUser'

const resolver = {
	Query: {
		users: getUsers,
	},
	Mutation: {
		createUser,
	},
}

export default resolver
