const getUsers = async (_parent: object, _args: undefined, context: any) => {
	const {
		models: { User },
	} = context
	const users = await User.getAllUsers()
	return users
}

export default getUsers
