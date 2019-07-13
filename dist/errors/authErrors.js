"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_errors_1 = require("apollo-errors");
exports.InvalidLoginError = apollo_errors_1.createError('InvalidLoginError', {
    message: 'Invalid email or password, please try again.',
});
exports.UserDoesNotExistError = apollo_errors_1.createError('UserDoesNotExistError', {
    message: 'This user does not exist.',
});
//# sourceMappingURL=authErrors.js.map