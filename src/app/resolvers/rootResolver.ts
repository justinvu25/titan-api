import getUsers from './user/getUsers'
import registerUser from './user/registerUser'

const resolver = {
	Query: {
		users: getUsers,
	},
	Mutation: {
		registerUser,
	},
}

export default resolver
