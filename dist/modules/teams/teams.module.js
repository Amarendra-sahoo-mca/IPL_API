"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const team_entity_1 = require("../../entities/team.entity");
const teams_controller_1 = require("./teams.controller");
const teams_service_1 = require("./teams.service");
const teamLogo_entity_1 = require("../../entities/teamLogo.entity");
const excel_service_1 = require("../../utils/globalServices/excel.service");
let TeamModule = class TeamModule {
};
exports.TeamModule = TeamModule;
exports.TeamModule = TeamModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([team_entity_1.TeamEntity, teamLogo_entity_1.TeamLogoEntity])
        ],
        controllers: [
            teams_controller_1.TeamController
        ],
        providers: [
            teams_service_1.TeamService, excel_service_1.ExcelService
        ],
        exports: []
    })
], TeamModule);
//# sourceMappingURL=teams.module.js.map