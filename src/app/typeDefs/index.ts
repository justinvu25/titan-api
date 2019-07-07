import { gql } from 'apollo-server-express'
import User from './user'
import Room from './room'

const Query = gql`
	type Query {
		users: [User!]!
		user: User!
		room: Room
		rooms: [Room]!
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
	}
`

const typeDefs = [Query, Mutation, User, Room]

export default typeDefs
