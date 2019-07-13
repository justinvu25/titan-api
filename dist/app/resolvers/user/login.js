"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login = async (_parent, args, context) => {
    const { models: { User }, } = context;
    const { email, password } = args.input;
    const loginPayload = await User.login({ email, password });
    return loginPayload;
};
exports.default = login;
//# sourceMappingURL=login.js.map