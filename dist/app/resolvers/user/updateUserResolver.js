"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topics_1 = require("@/pubsub/topics");
const updateUserResolver = async (_parent, args, context) => {
    const { models: { User }, user: { id }, pubsub, } = context;
    const { input } = args;
    const user = await User.updateUser(id, input);
    pubsub.publish(topics_1.USER_UPDATED);
    return user;
};
exports.default = updateUserResolver;
//# sourceMappingURL=updateUserResolver.js.map