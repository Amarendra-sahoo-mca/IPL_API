"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypes = exports.UserRoles = void 0;
var UserRoles;
(function (UserRoles) {
    UserRoles[UserRoles["PRIMARY"] = 1] = "PRIMARY";
    UserRoles[UserRoles["SECONDARY"] = 2] = "SECONDARY";
})(UserRoles || (exports.UserRoles = UserRoles = {}));
var UserTypes;
(function (UserTypes) {
    UserTypes[UserTypes["ADMIN"] = 1] = "ADMIN";
    UserTypes[UserTypes["EMPLOYEE"] = 2] = "EMPLOYEE";
    UserTypes[UserTypes["AGENT"] = 3] = "AGENT";
})(UserTypes || (exports.UserTypes = UserTypes = {}));
//# sourceMappingURL=user.enum.js.map