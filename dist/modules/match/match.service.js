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
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const messages_1 = require("../../constants/messages");
const common_2 = require("../../utils/common");
const excel_service_1 = require("../../utils/globalServices/excel.service");
const team_entity_1 = require("../../entities/team.entity");
const typeorm_2 = require("typeorm");
const match_entity_1 = require("../../entities/match.entity");
const common_enum_1 = require("../../enums/common.enum");
const matchinfo_1 = require("../../utils/data/matchinfo");
const points_entity_1 = require("../../entities/points.entity");
const player_entity_1 = require("../../entities/player.entity");
let MatchService = class MatchService {
    constructor(repository, PointRepository, teamRepository, excelService) {
        this.repository = repository;
        this.PointRepository = PointRepository;
        this.teamRepository = teamRepository;
        this.excelService = excelService;
    }
    async findAll(queryParams) {
        try {
            const pagination = (0, common_2.applyPagination)(queryParams.page);
            const order = (0, common_2.applySorting)(queryParams.sortBy, queryParams.sortOrder, match_entity_1.MatchEntity);
            const res = this.repository
                .createQueryBuilder('matches')
                .innerJoinAndMapOne('matches.hometeam_data', team_entity_1.TeamEntity, 'team', 'matches.homeTeam = team.id')
                .innerJoinAndMapOne('matches.awayteam_data', team_entity_1.TeamEntity, 'team2', 'matches.awayTeam = team2.id');
            if (pagination.skip) {
                res.skip(pagination.skip);
            }
            if (pagination.take) {
                res.take(pagination.take);
            }
            if (order) {
                Object.keys(order).forEach((key) => {
                    res.addOrderBy(`user.${key}`, order[key]);
                });
            }
            const response = await res.getMany();
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `matches`,
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
    async findA() {
        try {
            const res = this.repository
                .createQueryBuilder('matches')
                .innerJoinAndMapOne('matches.hometeam_data', team_entity_1.TeamEntity, 'team', 'matches.homeTeam = team.id')
                .innerJoinAndMapOne('matches.awayteam_data', team_entity_1.TeamEntity, 'team2', 'matches.awayTeam = team2.id');
            const response = await res.getMany();
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `matches`,
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
    async findAl(id) {
        try {
            const res = await this.repository
                .createQueryBuilder('matches')
                .innerJoinAndMapOne('matches.hometeam_data', team_entity_1.TeamEntity, 'team', 'matches.homeTeam = team.id')
                .innerJoinAndMapOne('matches.awayteam_data', team_entity_1.TeamEntity, 'team2', 'matches.awayTeam = team2.id')
                .where('matches.homeTeam = :id OR matches.awayTeam = :id', { id })
                .getMany();
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `matches`,
                data: res,
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
    async findAlll(id) {
        try {
            const res = await this.repository
                .createQueryBuilder('matches')
                .innerJoinAndMapOne('matches.hometeam_data', team_entity_1.TeamEntity, 'team', 'matches.homeTeam = team.id')
                .innerJoinAndMapOne('matches.awayteam_data', team_entity_1.TeamEntity, 'team2', 'matches.awayTeam = team2.id')
                .where('matches.homeTeam = :id', { id })
                .getMany();
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `matches`,
                data: res,
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
    async setAll() {
        try {
            await this.repository.clear();
            await this.repository.query(`ALTER TABLE matches AUTO_INCREMENT = 1`);
            await Promise.all(matchinfo_1.matchdetails.map(async (match) => {
                match.homeTeam = common_enum_1.Team[match.homeTeamName];
                match.awayTeam = common_enum_1.Team[match.awayTeamName];
                const { homeTeamName, awayTeamName, ...payload } = match;
                await this.repository.save(payload);
            }));
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `match imported successfully`,
                data: null,
            };
        }
        catch (err) {
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                success: false,
                message: `unable to store`,
                data: err,
            };
            return response;
        }
    }
    async findOne(id) {
        const response = await this.repository
            .createQueryBuilder('match')
            .innerJoinAndMapOne('match.hometeam_data', team_entity_1.TeamEntity, 'team', 'match.homeTeam = team.id')
            .innerJoinAndMapOne('match.awayteam_data', team_entity_1.TeamEntity, 'team2', 'match.awayTeam = team2.id')
            .innerJoinAndMapOne('match.home_team_captain', player_entity_1.playersEntity, 'hc', 'team.captain = hc.id')
            .innerJoinAndMapOne('match.away_team_captain', player_entity_1.playersEntity, 'ac', 'team2.captain = ac.id')
            .where('match.id = :id', { id })
            .getOne();
        return response
            ? {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `players by id`,
                data: response,
            }
            : {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                success: false,
                message: `players not found`,
                data: null,
            };
    }
    async update(id, PlayerDTO) {
        try {
            const user = await this.repository.findOneBy({ id });
            if (!user) {
                const response = {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    success: false,
                    message: `Match ${messages_1.default.NOT_FOUND}`,
                    data: null,
                };
                return response;
            }
            const updatedObj = this.repository.merge(user, PlayerDTO);
            const updatedResponse = await this.repository.update(id, updatedObj);
            const homeT = await this.PointRepository.findOneBy({
                team: updatedObj.homeTeam,
            });
            const awayT = await this.PointRepository.findOneBy({
                team: updatedObj.awayTeam,
            });
            homeT.match += 1;
            awayT.match += 1;
            if (updatedObj.wonTeam == updatedObj.homeTeam) {
                homeT.win += 1;
                awayT.lose += 1;
                homeT.last_five_match = `${homeT.last_five_match},1`;
                awayT.last_five_match = `${awayT.last_five_match},2`;
                homeT.points = homeT.win * 2;
                awayT.points = awayT.win * 2;
            }
            else if (updatedObj.wonTeam == updatedObj.awayTeam) {
                awayT.win += 1;
                homeT.lose += 1;
                awayT.last_five_match = `${awayT.last_five_match},1`;
                homeT.last_five_match = `${homeT.last_five_match},2`;
                homeT.points = homeT.win * 2;
                awayT.points = awayT.win * 2;
            }
            else if (updatedObj.wonTeam == 0) {
                awayT.last_five_match = `${awayT.last_five_match},3`;
                homeT.last_five_match = `${homeT.last_five_match},3`;
                homeT.points += 1;
                awayT.points += 1;
            }
            await this.PointRepository.save(homeT);
            await this.PointRepository.save(awayT);
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `Match ${messages_1.default.UPDATE}`,
                data: updatedResponse,
            };
        }
        catch (error) {
            console.log(error);
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                success: false,
                message: `Match ${messages_1.default.UPDATE_FAILURE}`,
                data: error,
            };
            throw response;
        }
    }
};
exports.MatchService = MatchService;
exports.MatchService = MatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(match_entity_1.MatchEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(points_entity_1.PointEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(team_entity_1.TeamEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        excel_service_1.ExcelService])
], MatchService);
//# sourceMappingURL=match.service.js.map