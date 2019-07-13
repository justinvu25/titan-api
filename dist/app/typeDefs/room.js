"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `
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

	input CreateRoomMutationArgs {
		name: String!
	}

	input JoinRoomMutationArgs {
		pin: String!
	}

	input DeleteRoomMutationArgs {
		roomId: String!
	}
`;
//# sourceMappingURL=room.js.map