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
exports.playersEntity = void 0;
const common_enum_1 = require("../enums/common.enum");
const typeorm_1 = require("typeorm");
let playersEntity = class playersEntity {
};
exports.playersEntity = playersEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], playersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], playersEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", Number)
], playersEntity.prototype, "base_price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", Number)
], playersEntity.prototype, "sell_price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: common_enum_1.player_Role,
        comment: '1- BatsMan, 2- Bowler, 3- AllRounder',
        nullable: true
    }),
    __metadata("design:type", Number)
], playersEntity.prototype, "designation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], playersEntity.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], playersEntity.prototype, "debut_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], playersEntity.prototype, "strike_rate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], playersEntity.prototype, "match_played", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], playersEntity.prototype, "economy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], playersEntity.prototype, "team_buy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], playersEntity.prototype, "runs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], playersEntity.prototype, "wickets", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], playersEntity.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], playersEntity.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: common_enum_1.player_status,
        comment: '0- written, 1- Buy'
    }),
    __metadata("design:type", Number)
], playersEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], playersEntity.prototype, "created_on", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], playersEntity.prototype, "modified_on", void 0);
exports.playersEntity = playersEntity = __decorate([
    (0, typeorm_1.Entity)("players")
], playersEntity);
//# sourceMappingURL=player.entity.js.map