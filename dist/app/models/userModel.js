"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const lodash_1 = require("lodash");
const authErrors_1 = require("@/errors/authErrors");
const constants_1 = require("@/utils/constants");
class User {
    constructor({ connector }) {
        this.connector = connector;
    }
    async getAllUsers() {
        return this.connector.getAllUsers();
    }
    async registerUser(userData) {
        const user = await this.connector.findUserByEmail(userData.email);
        if (user) {
            throw new Error('User already exists.');
        }
        const hashedPassword = bcrypt.hashSync(userData.password, constants_1.SALT_ROUNDS);
        if (hashedPassword) {
            const createdUser = await this.connector.createUser({
                ...userData,
                password: hashedPassword,
            });
            return createdUser;
        }
        throw new Error('User could not be created.');
    }
    async deleteUser(userId) {
        const user = await this.connector.deleteUser(userId);
        if (!user) {
            throw new authErrors_1.UserDoesNotExistError();
        }
        return user;
    }
    async login(loginCredentials) {
        const user = await this.connector.findUserByEmail(loginCredentials.email);
        if (!user) {
            throw new authErrors_1.UserDoesNotExistError();
        }
        const passwordMatch = await bcrypt.compare(loginCredentials.password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ user: lodash_1.pick(user, ['_id']) }, process.env.JWT_SECRET, {
                expiresIn: constants_1.JWT_EXPIRY,
            });
            return {
                accessToken: token,
                expiresIn: constants_1.JWT_EXPIRY,
            };
        }
        throw new authErrors_1.InvalidLoginError();
    }
    async getUser(id) {
        const user = await this.connector.findUserById(id);
        if (!user) {
            throw new authErrors_1.UserDoesNotExistError();
        }
        return user;
    }
    async updateUser(id, update) {
        const user = await this.connector.findUserByIdAndUpdate(id, update);
        if (!user) {
            throw new authErrors_1.UserDoesNotExistError();
        }
        return user;
    }
    async getUsersByRoom(userIds) {
        const users = await this.connector.findUsersByUserIds(userIds);
        return users;
    }
}
exports.default = User;
//# sourceMappingURL=userModel.js.map