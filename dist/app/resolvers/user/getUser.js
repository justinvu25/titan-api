"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = async (_parent, _args, context) => {
    const { models: { User }, user: { id }, } = context;
    const user = await User.getUser(id);
    return user;
};
exports.default = getUser;
//# sourceMappingURL=getUser.js.map