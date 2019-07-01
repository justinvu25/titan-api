import { gql } from 'apollo-server-express'

export default gql`
	type Room {
		name: String!
		userIds: [String!]!
		pin: String!
		sessionStarted: Boolean
		votingCompleted: Boolean
	}

	input CreateRoomMutationArgs {
		name: String!
	}
`
