"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers = async (_parent, _args, context) => {
    const { models: { User }, } = context;
    const users = await User.getAllUsers();
    return users;
};
exports.default = getUsers;
//# sourceMappingURL=getUsers.js.map