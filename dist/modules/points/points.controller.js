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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointsController = exports.FileUploadDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const points_service_1 = require("./points.service");
const points_dto_1 = require("./points.dto");
class FileUploadDto {
}
exports.FileUploadDto = FileUploadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", Object)
], FileUploadDto.prototype, "file", void 0);
let PointsController = class PointsController {
    constructor(terminalService) {
        this.terminalService = terminalService;
    }
    getAll() {
        return this.terminalService.findAll();
    }
    update(id, DTO) {
        return this.terminalService.update(id, DTO);
    }
};
exports.PointsController = PointsController;
__decorate([
    (0, common_1.Get)("all"),
    (0, swagger_1.ApiOperation)({ summary: "List All Pointss" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PointsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Patch)("/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Update a Points entry" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, points_dto_1.PointsDto]),
    __metadata("design:returntype", void 0)
], PointsController.prototype, "update", null);
exports.PointsController = PointsController = __decorate([
    (0, common_1.Controller)("points"),
    (0, swagger_1.ApiTags)("Points"),
    __metadata("design:paramtypes", [points_service_1.PointsService])
], PointsController);
//# sourceMappingURL=points.controller.js.map