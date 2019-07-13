"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `
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
`;
//# sourceMappingURL=user.js.map