import { Maybe } from './generated'
import { Pubsub } from './pubsub'

export interface Context {
	models: {
		User: {
			registerUser: Function
			getAllUsers: Function
			login: Function
			deleteUser: Function
			getUser: Function
			getUsersByRoom: Function
			updateUser: Function
		}
		Room: {
			createRoom: Function
			getRoomForUser: Function
			addUserToRoom: Function
			getAllRooms: Function
			deleteRoomByRoomId: Function
			removeUserFromRoom: Function
		}
		Yelp: {
			getRestaurants: Function
		}
	}
	user: {
		id: string
	}
	pubsub: Pubsub
}

export interface RequestContext {
	headers: {
		authorization: Maybe<string>
	}
}

export interface ConnectionContext {
	context: {
		authorization: Maybe<string>
	}
}
