import { gql } from 'apollo-server-express'

export default gql`
	type Room {
		_id: ID!
		name: String!
		userIds: [String!]!
		pin: String!
		sessionStarted: Boolean
		votingCompleted: Boolean
		roomOwner: User!
		party: [User!]!
	}

	type DeleteRoomMutationPayload {
		id: String!
	}

	type LeaveRoomMutationPayload {
		success: Boolean!
	}

	input LeaveRoomMutationArgs {
		roomId: String!
	}

	input CreateRoomMutationArgs {
		name: String!
	}

	input JoinRoomMutationArgs {
		pin: String!
	}

	input DeleteRoomMutationArgs {
		roomId: String!
	}

	input StartSessionsForRoomMutationArgs {
		roomId: String!
	}
`
