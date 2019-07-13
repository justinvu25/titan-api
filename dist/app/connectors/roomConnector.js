"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_1 = __importDefault(require("@/entities/room"));
const pinGenerator_1 = __importDefault(require("@/utils/pinGenerator"));
class RoomConnector {
    async createRoom(roomInput) {
        const { name, userId } = roomInput;
        const room = await room_1.default.create({
            name,
            userIds: [userId],
            pin: pinGenerator_1.default(),
            roomOwner: userId,
        });
        return room;
    }
    async getRoomByUserId(userId) {
        const room = await room_1.default.findOne({ userIds: userId });
        return room;
    }
    async addUserToRoom(pin, userId) {
        const room = await room_1.default.findOneAndUpdate({ pin }, { $push: { userIds: userId } });
        return room;
    }
    async getAllRooms() {
        const room = await room_1.default.find();
        return room;
    }
    async deleteRoomByRoomId(roomId) {
        const room = await room_1.default.findByIdAndDelete(roomId);
        return room;
    }
}
exports.default = RoomConnector;
//# sourceMappingURL=roomConnector.js.map