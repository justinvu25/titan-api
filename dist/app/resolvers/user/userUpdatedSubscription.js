"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topics_1 = require("@/pubsub/topics");
const userUpdatedSubscription = (_parent, _args, context) => {
    const { pubsub } = context;
    return pubsub.asyncIterator([topics_1.USER_UPDATED]);
};
exports.default = userUpdatedSubscription;
//# sourceMappingURL=userUpdatedSubscription.js.map