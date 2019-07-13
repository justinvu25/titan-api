"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deleteUser = async (_parent, _args, context) => {
    const { models: { User }, user, } = context;
    const { _id } = await User.deleteUser(user.id);
    return {
        id: _id,
    };
};
exports.default = deleteUser;
//# sourceMappingURL=deleteUser.js.map