
import { BadRequestException, Body, Controller, Get, HttpStatus, NotFoundException, Param, Patch, Post, Put, Query, Res, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiOperation, ApiProperty, ApiTags } from "@nestjs/swagger";
import { diskStorage } from 'multer';
import * as fs from 'fs';

// import { FileUploadDto } from "../designation/designation.controller";
import { AnyFilesInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { PaginationSortingDTO } from "src/utils/pagination.dto";
import { MulterHelper } from "src/middlewires/multer.helper";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { join } from "path";
import { Response } from 'express';
import { TeamService } from "./teams.service";
import { TeamEntity } from "src/entities/team.entity";
import * as mime from 'mime-types';
import { teamDto } from "./teams.dto";


export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

@Controller("team")
@ApiTags("team")
export class TeamController{

     constructor(
        private terminalService:TeamService,
         @InjectRepository(TeamEntity) private repository: Repository<TeamEntity>,
     ){}

    @Get("all")
    @ApiOperation({ summary: "List All teams" })
    getAll(){
         return this.terminalService.findAll();
    }

    @Get(":id")
    // @UseGuards(JwtAuthGuard)
    // @Roles(Role.ADMIN)
    @ApiOperation({ summary: "List one team" })
    findOne(@Param("id") id:number) {
        return this.terminalService.findOne(id);
    }

    @Get('logo/preview/:filePath')
    async getSingleFiles(
      @Param('filePath') filePath: string,
      @Res() res: Response,
    ) {
      try {
        const decodedPath = decodeURIComponent(filePath);
        const fullPath = join(process.cwd(), decodedPath);
        
        
  
        if (!fs.existsSync(fullPath)) {
          throw new NotFoundException(`File not found: ${filePath}`);
        }
  
        // Get the correct MIME type based on file extension
        const mimeType = mime.lookup(fullPath) || 'application/octet-stream';
  
        res.set({
          'Content-Type': mimeType,
          'Content-Disposition': `attachment; filename="${filePath.split(/[\\/]/).pop()}"`,
        });
        fs.createReadStream(fullPath).pipe(res);
      } catch (error) {
        console.log(error);
        
        throw new NotFoundException('Invalid file path');
      }
    }

    @Patch("update_banner/:id")
    // @UseGuards(JwtAuthGuard)
    // @Roles(Role.ADMIN)
    @UseInterceptors(
      AnyFilesInterceptor({
        storage: diskStorage({
          destination: MulterHelper.destinationPath,
          filename: MulterHelper.customFileName,
        }),
      })
    )
    @ApiConsumes('multipart/form-data')
    @ApiBody({
      schema: {
        type: 'object',
        properties: {
          'banner_path': {
            type: 'array',
            items: {
              type: 'string',
              format: 'binary',
            },
          },
        },
      },
    })
    @ApiOperation({ summary: "Update team banner" })
    update(
      @Param("id") id: string,
      
      @UploadedFiles() files: Array<Express.Multer.File>
    ) {       
      return this.terminalService.update(parseInt(id), files);
    }

    @Post("create")
    // @UseGuards(JwtAuthGuard)
    // @Roles(Role.ADMIN)
    @ApiOperation({ summary: "save AgentCommissiontoUpload" })
    save(@Body() DTO:teamDto) {
        return this.terminalService.save(DTO);
    }
    
} 


