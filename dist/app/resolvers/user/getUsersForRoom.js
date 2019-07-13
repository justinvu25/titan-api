"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsersForRoom = async (parent, _args, context) => {
    const { userIds } = parent;
    const { models: { User }, } = context;
    const users = await User.getUsersByRoom(userIds);
    return users;
};
exports.default = getUsersForRoom;
//# sourceMappingURL=getUsersForRoom.js.map