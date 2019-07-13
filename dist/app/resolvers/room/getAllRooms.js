"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllRooms = async (_parent, _args, context) => {
    const { models: { Room }, } = context;
    const room = await Room.getAllRooms();
    return room;
};
exports.default = getAllRooms;
//# sourceMappingURL=getAllRooms.js.map