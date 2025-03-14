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
exports.FilterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_enum_1 = require("../../enums/common.enum");
class FilterDTO {
}
exports.FilterDTO = FilterDTO;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `page`,
        example: 1,
        default: 1,
        minimum: 1,
    }),
    __metadata("design:type", Number)
], FilterDTO.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `name`,
    }),
    __metadata("design:type", String)
], FilterDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `skill`,
    }),
    __metadata("design:type", String)
], FilterDTO.prototype, "skill", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `sortBy`,
    }),
    __metadata("design:type", String)
], FilterDTO.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `ASC,DESC`,
        example: common_enum_1.Sorting.ASC,
        default: common_enum_1.Sorting.ASC,
    }),
    __metadata("design:type", String)
], FilterDTO.prototype, "sortOrder", void 0);
//# sourceMappingURL=filter.dto.js.map