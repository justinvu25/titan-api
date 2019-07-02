import { gql } from 'apollo-server-express'
import User from './user'
import Room from './room'

const Query = gql`
	type Query {
		users: [User!]!
		user: User!
		room: Room
	}
`

const Mutation = gql`
	type Mutation {
		registerUser(input: RegisterUserInput!): User!
		deleteUser: DeleteUserPayload!
		login(input: LoginCredentials!): LoginPayload!
		createRoom(input: CreateRoomMutationArgs!): Room!
	}
`

const typeDefs = [Query, Mutation, User, Room]

export default typeDefs
