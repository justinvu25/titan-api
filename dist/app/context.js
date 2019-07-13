"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("./models/userModel"));
const userConnector_1 = __importDefault(require("./connectors/userConnector"));
const roomModel_1 = __importDefault(require("./models/roomModel"));
const roomConnector_1 = __importDefault(require("./connectors/roomConnector"));
const pubsub_1 = __importDefault(require("@/pubsub/pubsub"));
const jwtHelpers_1 = require("@/utils/jwtHelpers");
const context = async ({ req, connection, }) => {
    const userConnector = new userConnector_1.default();
    const roomConnector = new roomConnector_1.default();
    const models = {
        User: new userModel_1.default({
            connector: userConnector,
        }),
        Room: new roomModel_1.default({
            connector: roomConnector,
        }),
    };
    if (connection) {
        return {
            models,
            pubsub: pubsub_1.default,
            user: jwtHelpers_1.decodeJwt(connection.context.authorization),
            ...connection.context,
        };
    }
    const user = jwtHelpers_1.decodeJwt(req.headers.authorization);
    const userData = user ? { user } : {};
    return {
        models,
        pubsub: pubsub_1.default,
        ...userData,
    };
};
exports.default = context;
//# sourceMappingURL=context.js.map