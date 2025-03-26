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
exports.PointsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const messages_1 = require("../../constants/messages");
const typeorm_2 = require("typeorm");
const points_entity_1 = require("../../entities/points.entity");
const team_entity_1 = require("../../entities/team.entity");
let PointsService = class PointsService {
    constructor(repository) {
        this.repository = repository;
    }
    async save(AgentCommissiomtoUploadtDto) {
        try {
            const createdResponse = await this.repository.save(AgentCommissiomtoUploadtDto);
            const response = {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: `Points ${messages_1.default.SAVE}`,
                data: createdResponse,
            };
            return response;
        }
        catch (error) {
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                success: false,
                message: `Admin ${messages_1.default.SAVE_FAIL}`,
                data: error,
            };
            return response;
        }
    }
    async findAll() {
        try {
            const response = await this.repository.createQueryBuilder('point')
                .leftJoinAndMapOne('point.team_data', team_entity_1.TeamEntity, 'team', 'point.team = team.id')
                .orderBy('point.points', 'DESC')
                .addOrderBy('CAST(point.run_rate AS DECIMAL(10,3))', 'DESC')
                .getMany();
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `Points`,
                data: response,
            };
        }
        catch (err) {
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                success: false,
                message: `no data found`,
                data: err,
            };
            return response;
        }
    }
    async update(id, dto) {
        try {
            const response = await this.repository.findOneBy({ id });
            const user = response;
            if (!user) {
                const response = {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    success: false,
                    message: `Points ${messages_1.default.NOT_FOUND}`,
                    data: null,
                };
                return response;
            }
            const updatedObj = this.repository.merge(user, dto);
            const updatedResponse = await this.repository.update(id, updatedObj);
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `Points ${messages_1.default.UPDATE}`,
                data: updatedResponse
            };
        }
        catch (error) {
            console.log(error);
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                success: false,
                message: `Points  ${messages_1.default.UPDATE_FAILURE}`,
                data: error,
            };
            return response;
        }
    }
};
exports.PointsService = PointsService;
exports.PointsService = PointsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(points_entity_1.PointEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PointsService);
//# sourceMappingURL=points.service.js.map