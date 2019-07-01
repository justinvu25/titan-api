import getUsers from './user/getUsers'
import registerUser from './user/registerUser'
import login from './user/login'

const resolver = {
	Query: {
		users: getUsers,
	},
	Mutation: {
		registerUser,
		login,
	},
}

export default resolver
