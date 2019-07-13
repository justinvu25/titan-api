"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
const db = process.env.MONGO_URL;
mongoose_1.default.connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
});
//# sourceMappingURL=mongoose.js.map