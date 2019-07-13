"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roomOwnerResolver = async (parent, _args, context) => {
    const { models: { User }, } = context;
    const { roomOwner: roomOwnerId } = parent;
    const roomOwner = await User.getUser(roomOwnerId);
    return roomOwner;
};
exports.default = roomOwnerResolver;
//# sourceMappingURL=roomOwnerResolver.js.map