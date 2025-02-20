"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySortingJoin = exports.applySorting = exports.applyPagination = exports.generateOtp = exports.email = exports.CreatedBy = exports.generatePassword = exports.getUserTypeName = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_enum_1 = require("../enums/user.enum");
const crypto = require("crypto");
const typeorm_1 = require("typeorm");
const getUserTypeName = (type) => {
    switch (type) {
        case user_enum_1.UserTypes.ADMIN:
            return 'Admin';
        case user_enum_1.UserTypes.EMPLOYEE:
            return 'Employee';
        case user_enum_1.UserTypes.AGENT:
            return 'Agent';
        default:
            return 'Unknown';
    }
};
exports.getUserTypeName = getUserTypeName;
const generatePassword = (length = 10) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+={}<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};
exports.generatePassword = generatePassword;
class CreatedBy {
}
exports.CreatedBy = CreatedBy;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `created_by`,
    }),
    __metadata("design:type", Number)
], CreatedBy.prototype, "created_by", void 0);
class email {
}
exports.email = email;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `email`,
    }),
    __metadata("design:type", String)
], email.prototype, "email", void 0);
const generateOtp = () => {
    return crypto.randomBytes(3).toString('hex').toUpperCase();
};
exports.generateOtp = generateOtp;
const applyPagination = (page = 1) => {
    let currentPage = Number(page);
    if (isNaN(currentPage) || currentPage <= 0) {
        currentPage = 1;
    }
    const take = 100;
    const skip = (currentPage - 1) * take;
    return {
        take,
        skip
    };
};
exports.applyPagination = applyPagination;
const applySorting = (sortBy, sortOrder, entity) => {
    const order = {};
    const metadata = (0, typeorm_1.getMetadataArgsStorage)();
    const columns = metadata.columns
        .filter(column => column.target === entity)
        .map(column => column.propertyName);
    if (sortBy && columns.includes(sortBy)) {
        order[sortBy] = sortOrder?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    }
    else {
    }
    return order;
};
exports.applySorting = applySorting;
const applySortingJoin = ({ entity, sortBy, sortOrder, relations = {}, alias, }) => {
    const metadata = (0, typeorm_1.getMetadataArgsStorage)();
    const entityColumns = metadata.columns
        .filter(column => column.target === entity)
        .map(column => column.propertyName);
    let sortField = `${alias}.id`;
    if (sortBy && entityColumns.includes(sortBy)) {
        sortField = `${alias}.${sortBy}`;
    }
    else if (sortBy && relations[sortBy]) {
        sortField = relations[sortBy];
    }
    const validSortOrder = sortOrder?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    return {
        sortField,
        sortOrder: validSortOrder,
    };
};
exports.applySortingJoin = applySortingJoin;
//# sourceMappingURL=common.js.map