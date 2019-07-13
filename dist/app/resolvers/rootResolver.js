"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const room_1 = require("./room");
const mutationResolvers = {
    registerUser: user_1.registerUser,
    updateUser: user_1.updateUserResolver,
    deleteUser: user_1.deleteUser,
    login: user_1.login,
    createRoom: room_1.createRoomResolver,
    joinRoom: room_1.addUserToRoom,
    deleteRoom: room_1.deleteRoom,
};
const commonResolvers = {
    Room: {
        party: user_1.getUsersForRoom,
        roomOwner: room_1.roomOwnerResolver,
    },
    User: {
        room: room_1.getRoomForUser,
    },
};
const resolver = {
    ...commonResolvers,
    Query: {
        users: user_1.getUsers,
        user: user_1.getUser,
        rooms: room_1.getAllRooms,
    },
    Mutation: mutationResolvers,
    Subscription: {
        userUpdated: {
            subscribe: user_1.userUpdatedSubscription,
            resolve: user_1.getUser,
        },
    },
};
exports.default = resolver;
//# sourceMappingURL=rootResolver.js.map