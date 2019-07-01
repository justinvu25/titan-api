import getUsers from './user/getUsers'
import registerUser from './user/registerUser'
import login from './user/login'
import deleteUser from './user/deleteUser'

const resolver = {
	Query: {
		users: getUsers,
	},
	Mutation: {
		registerUser,
		deleteUser,
		login,
	},
}

export default resolver
