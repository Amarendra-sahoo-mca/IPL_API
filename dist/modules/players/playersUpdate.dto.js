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
exports.playersUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class playersUpdateDto {
}
exports.playersUpdateDto = playersUpdateDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `name`,
    }),
    __metadata("design:type", String)
], playersUpdateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `base_price`,
    }),
    __metadata("design:type", Number)
], playersUpdateDto.prototype, "base_price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `sell_price`,
    }),
    __metadata("design:type", Number)
], playersUpdateDto.prototype, "sell_price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `designation`,
    }),
    __metadata("design:type", Number)
], playersUpdateDto.prototype, "designation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `from`,
    }),
    __metadata("design:type", String)
], playersUpdateDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `team_buy`,
    }),
    __metadata("design:type", Number)
], playersUpdateDto.prototype, "team_buy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `age`,
    }),
    __metadata("design:type", Number)
], playersUpdateDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `photo`,
    }),
    __metadata("design:type", String)
], playersUpdateDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: `status`,
    }),
    __metadata("design:type", Number)
], playersUpdateDto.prototype, "status", void 0);
//# sourceMappingURL=playersUpdate.dto.js.map