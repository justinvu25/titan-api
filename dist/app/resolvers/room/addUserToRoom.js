"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addUserToRoom = async (_parent, args, context) => {
    const { models: { Room }, user: { id }, } = context;
    const { input: { pin }, } = args;
    const room = await Room.addUserToRoom(pin, id);
    return room;
};
exports.default = addUserToRoom;
//# sourceMappingURL=addUserToRoom.js.map