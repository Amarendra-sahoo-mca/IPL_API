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
exports.playersController = exports.FileUploadDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const fs = require("fs");
const platform_express_1 = require("@nestjs/platform-express");
const players_service_1 = require("./players.service");
const multer_helper_1 = require("../../middlewires/multer.helper");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const path_1 = require("path");
const player_entity_1 = require("../../entities/player.entity");
const filter_dto_1 = require("./filter.dto");
class FileUploadDto {
}
exports.FileUploadDto = FileUploadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", Object)
], FileUploadDto.prototype, "file", void 0);
let playersController = class playersController {
    constructor(terminalService, repository) {
        this.terminalService = terminalService;
        this.repository = repository;
    }
    getAll(queryParams) {
        return this.terminalService.findAll(queryParams);
    }
    getAlll() {
        return this.terminalService.setnetionality();
    }
    findTop() {
        return this.terminalService.findTop();
    }
    findTopruns() {
        return this.terminalService.orangecap();
    }
    findpurplecap() {
        return this.terminalService.purplecap();
    }
    findOne(id) {
        return this.terminalService.findOne(id);
    }
    async save(body, files) {
        let documentDTO;
        try {
            documentDTO = JSON.parse(body.documentDTO);
        }
        catch (error) {
            console.error('Error parsing userDTO:', error);
            throw new common_1.BadRequestException('Invalid JSON in userDTO. Please check the format.');
        }
        return this.terminalService.save(documentDTO, files);
    }
    async importExcel(file) {
        return this.terminalService.importFromExcel(file);
    }
    async getFile(docId, res) {
        const document = await this.repository.findOneBy({ id: docId });
        if (!document) {
            throw new common_1.NotFoundException('Document not found');
        }
        const fullPath = (0, path_1.join)(process.cwd(), document.photo);
        if (!fs.existsSync(fullPath)) {
            throw new common_1.NotFoundException('File not found');
        }
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename="${document.photo.split('\\').pop()}"`,
        });
        fs.createReadStream(fullPath).pipe(res);
    }
    update(id, userDTO, files) {
        if (!userDTO.dtos) {
            throw new common_1.BadRequestException('No DTOs received. Make sure you are sending a "dtos" field.');
        }
        let dtos;
        try {
            dtos = JSON.parse(userDTO.dtos);
        }
        catch (error) {
            console.error('Error parsing dtos:', error);
            throw new common_1.BadRequestException('Invalid JSON in dtos field. Please check the format.');
        }
        return this.terminalService.update(parseInt(id), dtos, files);
    }
};
exports.playersController = playersController;
__decorate([
    (0, common_1.Get)("all"),
    (0, swagger_1.ApiOperation)({ summary: "List All playerss" }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDTO]),
    __metadata("design:returntype", void 0)
], playersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("set_player_image"),
    (0, swagger_1.ApiOperation)({ summary: "Set players image" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], playersController.prototype, "getAlll", null);
__decorate([
    (0, common_1.Get)('/top10'),
    (0, swagger_1.ApiOperation)({ summary: "List top players" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], playersController.prototype, "findTop", null);
__decorate([
    (0, common_1.Get)('/orange_cap'),
    (0, swagger_1.ApiOperation)({ summary: "List top players" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], playersController.prototype, "findTopruns", null);
__decorate([
    (0, common_1.Get)('/purplecap'),
    (0, swagger_1.ApiOperation)({ summary: "List top players" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], playersController.prototype, "findpurplecap", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "List one players" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], playersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)("create"),
    (0, swagger_1.ApiOperation)({ summary: 'Create playerss' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: multer_helper_1.MulterHelper.destinationPath,
            filename: multer_helper_1.MulterHelper.customFileName,
        }),
    })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                documentDTO: {
                    type: 'string',
                    description: 'JSON string of UserSelfRegDto',
                },
                document_path: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], playersController.prototype, "save", null);
__decorate([
    (0, common_1.Post)('import'),
    (0, swagger_1.ApiOperation)({ summary: 'Import players from Excel file' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Excel file containing players data',
        type: FileUploadDto,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(xlsx|xls)$/)) {
                return cb(new Error('Only Excel files are allowed!'), false);
            }
            cb(null, true);
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], playersController.prototype, "importExcel", null);
__decorate([
    (0, common_1.Get)('file/:docId'),
    __param(0, (0, common_1.Param)('docId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], playersController.prototype, "getFile", null);
__decorate([
    (0, common_1.Patch)("update/:id"),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: multer_helper_1.MulterHelper.destinationPath,
            filename: multer_helper_1.MulterHelper.customFileName,
        }),
    })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                dtos: {
                    type: 'string',
                    description: 'JSON string of UserDocumentDto array',
                },
                'document_path': {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiOperation)({ summary: "Update players data" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Array]),
    __metadata("design:returntype", void 0)
], playersController.prototype, "update", null);
exports.playersController = playersController = __decorate([
    (0, common_1.Controller)("players"),
    (0, swagger_1.ApiTags)("players"),
    __param(1, (0, typeorm_1.InjectRepository)(player_entity_1.playersEntity)),
    __metadata("design:paramtypes", [players_service_1.playersService,
        typeorm_2.Repository])
], playersController);
//# sourceMappingURL=players.controller.js.map