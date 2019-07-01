import { gql } from 'apollo-server-express'
import User from './user'

const Query = gql`
	type Query {
		users: [User!]!
		user: User!
	}
	type Mutation {
		registerUser(input: RegisterUserInput!): User!
		deleteUser: DeleteUserPayload!
		login(input: LoginCredentials!): LoginPayload!
	}
`

const typeDefs = [Query, User]

export default typeDefs
