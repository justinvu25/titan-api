import { gql } from 'apollo-server-express'
import User from './user'

const Query = gql`
	type Query {
		users: [User!]!
	}
	type Mutation {
		createUser(input: CreateUserInput): User
	}
`

const typeDefs = [Query, User]

export default typeDefs
