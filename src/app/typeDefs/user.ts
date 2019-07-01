import { gql } from 'apollo-server-express'

export default gql`
	type User {
		_id: ID!
		name: String!
		email: String!
	}

	type LoginPayload {
		accessToken: String!
		expiresIn: String!
	}

	type DeleteUserPayload {
		id: String!
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

	input DeleteUserInput {
		id: String!
	}
`
