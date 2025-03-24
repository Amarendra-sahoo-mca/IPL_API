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
exports.MatchController = exports.FileUploadDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../utils/pagination.dto");
const match_service_1 = require("./match.service");
const matchUpdate_dto_1 = require("./matchUpdate.dto");
class FileUploadDto {
}
exports.FileUploadDto = FileUploadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", Object)
], FileUploadDto.prototype, "file", void 0);
let MatchController = class MatchController {
    constructor(terminalService) {
        this.terminalService = terminalService;
    }
    getAl(queryParams) {
        return this.terminalService.findAl(queryParams);
    }
    getAlll(queryParams) {
        return this.terminalService.findAlll(queryParams);
    }
    getAll(queryParams) {
        return this.terminalService.findAll(queryParams);
    }
    All() {
        return this.terminalService.findA();
    }
    getxAll() {
        return this.terminalService.setAll();
    }
    findOne(id) {
        return this.terminalService.findOne(id);
    }
    update(id, DTO) {
        return this.terminalService.update(parseInt(id), DTO);
    }
};
exports.MatchController = MatchController;
__decorate([
    (0, common_1.Get)('get_all_match_of_a_team/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'List All My Matchs' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "getAl", null);
__decorate([
    (0, common_1.Get)('getallhomematchofteam/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'List All My Home Matchs' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "getAlll", null);
__decorate([
    (0, common_1.Get)('getall'),
    (0, swagger_1.ApiOperation)({ summary: 'List All Matchs' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationSortingDTO]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'List All Matchs foradmin' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "All", null);
__decorate([
    (0, common_1.Get)('saveall'),
    (0, swagger_1.ApiOperation)({ summary: 'List All Matchs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "getxAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "List one match" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update match' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, matchUpdate_dto_1.MatchUpdateDto]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "update", null);
exports.MatchController = MatchController = __decorate([
    (0, common_1.Controller)('match'),
    (0, swagger_1.ApiTags)('Match'),
    __metadata("design:paramtypes", [match_service_1.MatchService])
], MatchController);
//# sourceMappingURL=match.controller.js.map