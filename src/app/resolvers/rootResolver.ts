import {
	getUsers,
	getUser,
	updateUserResolver,
	registerUser,
	login,
	deleteUser,
	getUsersForRoom,
	userUpdatedSubscription,
} from './user'
import {
	createRoomResolver,
	getRoomForUser,
	addUserToRoom,
	getAllRooms,
	deleteRoom,
	roomOwnerResolver,
	leaveRoomResolver,
	startSessionsForRoomResolver,
} from './room'

import { getRestaurantsResolver } from './yelp'

const mutationResolvers = {
	registerUser,
	updateUser: updateUserResolver,
	deleteUser,
	login,
	createRoom: createRoomResolver,
	joinRoom: addUserToRoom,
	deleteRoom,
	leaveRoom: leaveRoomResolver,
	startSession: startSessionsForRoomResolver,
}

const commonResolvers = {
	Room: {
		party: getUsersForRoom,
		roomOwner: roomOwnerResolver,
	},
	User: {
		room: getRoomForUser,
	},
}

const resolver = {
	...commonResolvers,
	Query: {
		users: getUsers,
		user: getUser,
		rooms: getAllRooms,
		restaurants: getRestaurantsResolver,
	},
	Mutation: mutationResolvers,
	Subscription: {
		userUpdated: {
			subscribe: userUpdatedSubscription,
			resolve: getUser,
		},
	},
}

export default resolver
