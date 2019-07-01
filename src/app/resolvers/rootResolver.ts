import getUsers from './user/getUsers'
import registerUser from './user/registerUser'
import login from './user/login'
import deleteUser from './user/deleteUser'
import getUser from './user/getUser'

const resolver = {
	Query: {
		users: getUsers,
		user: getUser,
	},
	Mutation: {
		registerUser,
		deleteUser,
		login,
	},
}

export default resolver
