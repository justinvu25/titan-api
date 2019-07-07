import { gql } from 'apollo-server-express'

export default gql`
	type User {
		_id: ID!
		name: String!
		email: String!
		room: Room
	}

	type LoginPayload {
		accessToken: String!
		expiresIn: String!
	}

	type DeleteUserPayload {
		id: String!
	}

	input UpdateUserInput {
		name: String
		email: String
	}

	input RegisterUserInput {
		name: String!
		email: String!
		password: String!
	}

	input LoginCredentials {
		email: String!
		password: String!
	}
`
