import { Maybe } from '@/ts-types/generated'

export interface Context {
	models: {
		User: {
			registerUser: Function
			getAllUsers: Function
			login: Function
			deleteUser: Function
			getUser: Function
		}
	}
	user: {
		id: string
	}
}

export interface RequestContext {
	headers: {
		authorization: Maybe<string>
	}
}
