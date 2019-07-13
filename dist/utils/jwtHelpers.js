"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
exports.decodeJwt = (authToken) => {
    if (!authToken) {
        return null;
    }
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET, {
        algorithms: ['HS256'],
    });
    if (decodedToken) {
        const { user: { _id }, } = decodedToken;
        return {
            id: _id,
        };
    }
    return null;
};
//# sourceMappingURL=jwtHelpers.js.map