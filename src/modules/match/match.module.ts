import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { MatchController } from "./match.controller";
import { MatchService } from "./match.service";

import { ExcelService } from "src/utils/globalServices/excel.service";
import { TeamEntity } from "src/entities/team.entity";
import { MatchEntity } from "src/entities/match.entity";
import { PointEntity } from "src/entities/points.entity";

@ Module({
    imports: [
        TypeOrmModule.forFeature([MatchEntity,TeamEntity,PointEntity])
    ],
    controllers: [
        MatchController
    ],
    providers: [
        MatchService,
        ExcelService
    ],
    exports: []
})
  export class MatchModule {}