"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const user_1 = __importDefault(require("./user"));
const room_1 = __importDefault(require("./room"));
const Query = apollo_server_express_1.gql `
	type Query {
		users: [User!]!
		user: User!
		room: Room
		rooms: [Room]!
	}
`;
const Mutation = apollo_server_express_1.gql `
	type Mutation {
		registerUser(input: RegisterUserInput!): User!
		deleteUser: DeleteUserPayload!
		updateUser(input: UpdateUserInput!): User!
		login(input: LoginCredentials!): LoginPayload!
		createRoom(input: CreateRoomMutationArgs!): Room!
		joinRoom(input: JoinRoomMutationArgs!): Room!
		deleteRoom(input: DeleteRoomMutationArgs!): DeleteRoomMutationPayload!
	}

	type Subscription {
		userUpdated: User!
	}
`;
const typeDefs = [Query, Mutation, user_1.default, room_1.default];
exports.default = typeDefs;
//# sourceMappingURL=index.js.map