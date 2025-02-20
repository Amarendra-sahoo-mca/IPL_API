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
exports.MatchDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class MatchDto {
}
exports.MatchDto = MatchDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `name`,
    }),
    __metadata("design:type", String)
], MatchDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `base_price`,
    }),
    __metadata("design:type", Number)
], MatchDto.prototype, "base_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `sell_price`,
    }),
    __metadata("design:type", Number)
], MatchDto.prototype, "sell_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `designation`,
    }),
    __metadata("design:type", Number)
], MatchDto.prototype, "designation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `from`,
    }),
    __metadata("design:type", String)
], MatchDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `team_buy`,
    }),
    __metadata("design:type", Number)
], MatchDto.prototype, "team_buy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `age`,
    }),
    __metadata("design:type", Number)
], MatchDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `photo`,
    }),
    __metadata("design:type", String)
], MatchDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `status`,
    }),
    __metadata("design:type", Number)
], MatchDto.prototype, "status", void 0);
//# sourceMappingURL=match.dto.js.map