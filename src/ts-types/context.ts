export interface Context {
	models: {
		User: {
			registerUser: Function
			getAllUsers: Function
			login: Function
			deleteUser: Function
		}
	}
}
