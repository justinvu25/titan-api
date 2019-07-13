"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registerUser = async (_parent, args, context) => {
    const { models: { User }, } = context;
    const { input: { name, email, password }, } = args;
    const user = await User.registerUser({ name, email, password });
    return user;
};
exports.default = registerUser;
//# sourceMappingURL=registerUser.js.map