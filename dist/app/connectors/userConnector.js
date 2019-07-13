"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("@/entities/user"));
class UserConnector {
    async createUser(userData) {
        const { name, email, password } = userData;
        const user = await user_1.default.create({
            name,
            email,
            password,
        });
        return user;
    }
    async getAllUsers() {
        const users = await user_1.default.find();
        return users;
    }
    async findUsersByUserIds(userIds) {
        const users = await this.getAllUsers();
        return users.filter((user) => {
            const { _id: userId } = user;
            return userIds.includes(userId.toString());
        });
    }
    async findUserByEmail(email) {
        const user = await user_1.default.findOne({ email });
        return user;
    }
    async findUserById(id) {
        const user = await user_1.default.findById(id);
        return user;
    }
    async findUserByIdAndUpdate(id, update) {
        const user = await user_1.default.findByIdAndUpdate(id, { ...update });
        return user;
    }
    async deleteUser(userId) {
        const user = await user_1.default.findByIdAndDelete(userId);
        return user;
    }
}
exports.default = UserConnector;
//# sourceMappingURL=userConnector.js.map