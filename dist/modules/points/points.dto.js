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
exports.PointsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PointsDto {
}
exports.PointsDto = PointsDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PointsDto.prototype, "team", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PointsDto.prototype, "match", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PointsDto.prototype, "win", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PointsDto.prototype, "lose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PointsDto.prototype, "run_rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `points`,
    }),
    __metadata("design:type", Number)
], PointsDto.prototype, "points", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `last_five_match`,
    }),
    __metadata("design:type", String)
], PointsDto.prototype, "last_five_match", void 0);
//# sourceMappingURL=points.dto.js.map