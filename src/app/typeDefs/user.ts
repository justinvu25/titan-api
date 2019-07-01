import { gql } from 'apollo-server-express'

export default gql`
	type User {
		_id: ID!
		name: String!
		email: String!
	}

	input RegisterUserInput {
		name: String!
		email: String!
		password: String!
	}
`
