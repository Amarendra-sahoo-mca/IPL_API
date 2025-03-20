import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PointEntity } from "src/entities/points.entity";
import {   PointsController } from "./points.controller";
import {   PointsService } from "./points.service";
import { ExcelService } from "src/utils/globalServices/excel.service";

@ Module({
    imports: [
        TypeOrmModule.forFeature([PointEntity])
    ],
    controllers: [
          PointsController
    ],
    providers: [
          PointsService
    ],
    exports: []
})
  export class PointsModule {}