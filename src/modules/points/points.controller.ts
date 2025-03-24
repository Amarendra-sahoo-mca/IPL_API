
import { BadRequestException, Body, Controller, Get, HttpStatus, NotFoundException, Param, Patch, Post, Put, Query, Res, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiOperation, ApiProperty, ApiTags } from "@nestjs/swagger";
import { diskStorage } from 'multer';
import * as fs from 'fs';
import { AnyFilesInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { PaginationSortingDTO } from "src/utils/pagination.dto";
import { MulterHelper } from "src/middlewires/multer.helper";
import { join } from "path";
import { Response } from 'express';
import { PointsService } from "./points.service";
import * as mime from 'mime-types';
import { PointsDto } from "./points.dto";


export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

@Controller("points")
@ApiTags("Points")
export class PointsController{

     constructor(
        private terminalService:PointsService,
     ){}

    @Get("all")
    @ApiOperation({ summary: "List All Pointss" })
    getAll(){
         return this.terminalService.findAll();
    }

    // @Get(":id")
    // // @UseGuards(JwtAuthGuard)
    // // @Roles(Role.ADMIN)
    // @ApiOperation({ summary: "List one Points" })
    // findOne(@Param("id") id:number) {
    //     return this.terminalService.findOne(id);
    // }

    // @Post("create")
    // // @UseGuards(JwtAuthGuard)
    // // @Roles(Role.ADMIN)
    // @ApiOperation({ summary: "save AgentCommissiontoUpload" })
    // save(@Body() DTO:PointsDto) {
    //     return this.terminalService.save(DTO);
    // }

    @Patch("/:id")
    @ApiOperation({ summary: "Update a Points entry" })
    update(@Param("id") id: number, @Body() DTO: PointsDto) {
        return this.terminalService.update(id, DTO);
    }
    
} 


