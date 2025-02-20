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
exports.teamDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class teamDto {
}
exports.teamDto = teamDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `name`,
    }),
    __metadata("design:type", String)
], teamDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `money_have`,
    }),
    __metadata("design:type", String)
], teamDto.prototype, "namoney_have", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `spend_money`,
    }),
    __metadata("design:type", String)
], teamDto.prototype, "spend_money", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `rest_money`,
    }),
    __metadata("design:type", String)
], teamDto.prototype, "rest_money", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `title_own`,
    }),
    __metadata("design:type", Number)
], teamDto.prototype, "title_own", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `captain`,
    }),
    __metadata("design:type", Number)
], teamDto.prototype, "captain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `number_of_player`,
    }),
    __metadata("design:type", Number)
], teamDto.prototype, "number_of_player", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `short_name`,
    }),
    __metadata("design:type", String)
], teamDto.prototype, "short_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `logo`,
    }),
    __metadata("design:type", String)
], teamDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `winning_year`,
    }),
    __metadata("design:type", String)
], teamDto.prototype, "winning_year", void 0);
//# sourceMappingURL=teams.dto.js.map