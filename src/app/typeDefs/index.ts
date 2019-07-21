import { gql } from 'apollo-server-express'
import User from './user'
import Room from './room'
import Yelp from './yelp'

const Query = gql`
	type Query {
		users: [User!]!
		user: User!
		room: Room
		rooms: [Room]!
		restaurants(input: GetRestaurant): [Restaurant!]
	}
`

const Mutation = gql`
	type Mutation {
		registerUser(input: RegisterUserInput!): User!
		deleteUser: DeleteUserPayload!
		updateUser(input: UpdateUserInput!): User!
		login(input: LoginCredentials!): LoginPayload!
		createRoom(input: CreateRoomMutationArgs!): Room!
		joinRoom(input: JoinRoomMutationArgs!): Room!
		deleteRoom(input: DeleteRoomMutationArgs!): DeleteRoomMutationPayload!
		leaveRoom(input: LeaveRoomMutationArgs!): LeaveRoomMutationPayload!
	}

	type Subscription {
		userUpdated: User!
	}
`

const typeDefs = [Query, Mutation, User, Room, Yelp]

export default typeDefs
