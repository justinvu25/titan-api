"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deleteRoom = async (_parent, args, context) => {
    const { models: { Room }, } = context;
    const { input: { roomId }, } = args;
    const { _id } = await Room.deleteRoomByRoomId(roomId);
    return {
        id: _id,
    };
};
exports.default = deleteRoom;
//# sourceMappingURL=deleteRoom.js.map