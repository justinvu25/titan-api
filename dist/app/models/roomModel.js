"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Room {
    constructor({ connector }) {
        this.connector = connector;
    }
    async createRoom(roomInput) {
        const room = await this.connector.createRoom(roomInput);
        return room;
    }
    async getRoomForUser(userId) {
        const room = await this.connector.getRoomByUserId(userId);
        return room;
    }
    async addUserToRoom(pin, userId) {
        const room = await this.connector.addUserToRoom(pin, userId);
        return room;
    }
    async getAllRooms() {
        const room = await this.connector.getAllRooms();
        return room;
    }
    async deleteRoomByRoomId(roomId) {
        const room = await this.connector.deleteRoomByRoomId(roomId);
        return room;
    }
}
exports.default = Room;
//# sourceMappingURL=roomModel.js.map