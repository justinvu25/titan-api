"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRoomForUser = async (_parent, _args, context) => {
    const { models: { Room }, user, } = context;
    const { id } = user;
    const room = await Room.getRoomForUser(id);
    return room;
};
exports.default = getRoomForUser;
//# sourceMappingURL=getRoomForUser.js.map