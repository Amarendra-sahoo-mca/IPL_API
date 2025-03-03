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
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const messages_1 = require("../../constants/messages");
const excel_service_1 = require("../../utils/globalServices/excel.service");
const team_entity_1 = require("../../entities/team.entity");
const typeorm_2 = require("typeorm");
const player_entity_1 = require("../../entities/player.entity");
let TeamService = class TeamService {
    constructor(repository, excelService) {
        this.repository = repository;
        this.excelService = excelService;
    }
    async save(AgentCommissiomtoUploadtDto) {
        try {
            const createdResponse = await this.repository.save(AgentCommissiomtoUploadtDto);
            const response = {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: `team ${messages_1.default.SAVE}`,
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
            const res = this.repository.createQueryBuilder('player');
            const response = await res.getMany();
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `team`,
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
    async update(id, files) {
        try {
            const response = await this.repository.findOneBy({ id });
            const user = response;
            if (!user) {
                const response = {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    success: false,
                    message: `team ${messages_1.default.NOT_FOUND}`,
                    data: null,
                };
                return response;
            }
            if (files.length > 0) {
                user.logo = files[0].path;
            }
            const updatedResponse = await this.repository.update(id, user);
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `team banner ${messages_1.default.UPDATE}`,
                data: updatedResponse
            };
        }
        catch (error) {
            console.log(error);
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                success: false,
                message: `team banner ${messages_1.default.UPDATE_FAILURE}`,
                data: error,
            };
            return response;
        }
    }
    async findOne(id) {
        try {
            const response = await this.repository.createQueryBuilder('team')
                .leftJoinAndMapMany('team.players', player_entity_1.playersEntity, 'player', 'team.id = player.team_buy')
                .leftJoinAndMapOne('team.captainData', player_entity_1.playersEntity, 'player2', 'team.captain = player2.id')
                .where('team.id = :id', { id })
                .getOne();
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `team by id`,
                data: response,
            };
        }
        catch (err) {
            throw err;
        }
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_entity_1.TeamEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        excel_service_1.ExcelService])
], TeamService);
//# sourceMappingURL=teams.service.js.map