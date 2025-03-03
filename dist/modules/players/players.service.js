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
exports.playersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const messages_1 = require("../../constants/messages");
const common_2 = require("../../utils/common");
const player_entity_1 = require("../../entities/player.entity");
const excel_service_1 = require("../../utils/globalServices/excel.service");
const team_entity_1 = require("../../entities/team.entity");
const typeorm_2 = require("typeorm");
const playerinfo_1 = require("../../utils/data/playerinfo");
let playersService = class playersService {
    constructor(repository, teamRepository, excelService) {
        this.repository = repository;
        this.teamRepository = teamRepository;
        this.excelService = excelService;
    }
    async findAll(queryParams) {
        try {
            const pagination = (0, common_2.applyPagination)(queryParams.page);
            const order = (0, common_2.applySorting)(queryParams.sortBy, queryParams.sortOrder, player_entity_1.playersEntity);
            const res = this.repository.createQueryBuilder('player')
                .innerJoinAndMapOne('player.team', team_entity_1.TeamEntity, 'team', 'player.team_buy = team.id');
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
                message: `players`,
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
    async setimage() {
        let count = 0;
        try {
            await Promise.all(playerinfo_1.playerdetails.map(async (item) => {
                const res = await this.repository.findOne({ where: { name: (0, typeorm_2.Like)(`${item.name}%`) } });
                if (res) {
                    res.photo = item.img;
                    await this.repository.update(res.id, res);
                    ++count;
                }
                else {
                    console.log(item.name);
                }
            }));
            console.log('total image count', playerinfo_1.playerdetails.length);
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `${count} players image set successfully`,
                data: null,
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
    async findAllbyname(queryParams, name) {
        const where = {};
        const pagination = (0, common_2.applyPagination)(queryParams.page);
        const order = (0, common_2.applySorting)(queryParams.sortBy, queryParams.sortOrder, player_entity_1.playersEntity);
        if (name) {
            where.name = (0, typeorm_2.Like)(`%${name}%`);
        }
        try {
            const res = this.repository.createQueryBuilder('player')
                .innerJoinAndMapOne('player.team', team_entity_1.TeamEntity, 'team', 'player.team_buy = team.id')
                .where(where);
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
                message: `players by name`,
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
    async importFromExcel(file) {
        if (!file) {
            throw new common_1.BadRequestException('File is required');
        }
        try {
            const data = await this.excelService.parseExcelFile(file);
            if (!data || data.length === 0) {
                throw new common_1.BadRequestException('Excel file is empty');
            }
            if (!data[0].hasOwnProperty('name')) {
                throw new common_1.BadRequestException('Excel file must contain a "name" column');
            }
            const errors = [];
            let SellPrice = 0;
            const validDesignations = await Promise.all(data
                .map(async (row, index) => {
                const rowNumber = index + 1;
                if (!row.name || typeof row.name !== 'string' || row.name.trim() === '') {
                    errors.push(`Row ${rowNumber}: Name is required and cannot be empty`);
                    return null;
                }
                SellPrice += row.sell_price;
                if (!row.designation)
                    row.designation = 2;
                return row;
            })
                .filter(Boolean));
            if (errors.length > 0) {
                throw new common_1.BadRequestException({
                    message: 'Validation errors in Excel data',
                    errors: errors,
                });
            }
            if (validDesignations.length === 0) {
                throw new common_1.BadRequestException('No valid data found in the Excel file');
            }
            await this.repository.save(validDesignations.map(data => this.repository.create(data)));
            const team_data = await this.teamRepository.findOneBy({ id: validDesignations[1].team_buy });
            console.log('new data', team_data, '\n---------------\n');
            let spendMoney = parseInt(team_data.spend_money);
            spendMoney += SellPrice;
            const restmoney = parseInt(team_data.money_have) - spendMoney;
            team_data.spend_money = spendMoney.toString();
            team_data.rest_money = restmoney.toString();
            console.log('update data ----------------------\n', team_data);
            const save_responce = await this.teamRepository.update(team_data.id, team_data);
            const response = {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `${validDesignations.length} Data imported successfully`,
                data: validDesignations,
            };
            return response;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error('Excel import error:', error);
            throw new common_1.BadRequestException({
                message: 'Failed to process Excel file',
                error: error.message,
            });
        }
    }
    async update(id, userdocumentDTO, files) {
        const response = await this.findOne(id);
        const user = response.data;
        if (!user || user.length == 0) {
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                success: false,
                message: `players Document ${messages_1.default.NOT_FOUND}`,
                data: null,
            };
            return response;
        }
        try {
            const filteredDto = Object.fromEntries(Object.entries(userdocumentDTO).filter(([_, value]) => value !== '' && value !== null));
            const updatedObj = this.repository.merge(user, filteredDto);
            if (files.length > 0) {
                updatedObj.photo = files[0].path;
            }
            const updatedResponse = await this.repository.update(id, updatedObj);
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: `players ${messages_1.default.UPDATE}`,
                data: updatedResponse
            };
        }
        catch (error) {
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                success: false,
                message: `players ${messages_1.default.UPDATE_FAILURE}`,
                data: error,
            };
            return response;
        }
    }
    async findOne(id) {
        const response = await this.repository.findOneBy({ id });
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
    async save(Dtos, files) {
        try {
            if (files[0]) {
                Dtos.photo = files[0].path;
            }
            const savedDocument = await this.repository.save(Dtos);
            const response = {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: `players created`,
                data: savedDocument,
            };
            return response;
        }
        catch (error) {
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                success: false,
                message: `try again User-Document unable to submit`,
                data: error.message,
            };
            return response;
        }
    }
};
exports.playersService = playersService;
exports.playersService = playersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.playersEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(team_entity_1.TeamEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        excel_service_1.ExcelService])
], playersService);
//# sourceMappingURL=players.service.js.map