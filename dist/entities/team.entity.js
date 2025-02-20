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
exports.TeamEntity = void 0;
const typeorm_1 = require("typeorm");
let TeamEntity = class TeamEntity {
};
exports.TeamEntity = TeamEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TeamEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], TeamEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        nullable: true
    }),
    __metadata("design:type", String)
], TeamEntity.prototype, "money_have", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
    }),
    __metadata("design:type", String)
], TeamEntity.prototype, "spend_money", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
    }),
    __metadata("design:type", String)
], TeamEntity.prototype, "rest_money", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TeamEntity.prototype, "title_own", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TeamEntity.prototype, "number_of_player", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeamEntity.prototype, "winning_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TeamEntity.prototype, "captain", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TeamEntity.prototype, "vice_captain", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeamEntity.prototype, "short_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TeamEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TeamEntity.prototype, "banner", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TeamEntity.prototype, "venue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TeamEntity.prototype, "them", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TeamEntity.prototype, "created_on", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TeamEntity.prototype, "modified_on", void 0);
exports.TeamEntity = TeamEntity = __decorate([
    (0, typeorm_1.Entity)("teams")
], TeamEntity);
//# sourceMappingURL=team.entity.js.map