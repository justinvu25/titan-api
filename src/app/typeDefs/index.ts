import { gql } from 'apollo-server-express'
import User from './user'

const Query = gql`
	type Query {
		users: [User!]!
	}
	type Mutation {
		registerUser(input: RegisterUserInput!): User!
		deleteUser(input: DeleteUserInput!): DeleteUserPayload!
		login(input: LoginCredentials!): LoginPayload!
	}
`

const typeDefs = [Query, User]

export default typeDefs
