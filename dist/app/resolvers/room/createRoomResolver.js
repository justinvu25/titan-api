"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createRoom = async (_parent, args, context) => {
    const { models: { Room }, user: { id }, } = context;
    const { input: { name }, } = args;
    const room = await Room.createRoom({
        name,
        userId: id,
    });
    return room;
};
exports.default = createRoom;
//# sourceMappingURL=createRoomResolver.js.map