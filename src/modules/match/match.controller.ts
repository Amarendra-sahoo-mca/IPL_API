import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';

// import { FileUploadDto } from "../designation/designation.controller";
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { PaginationSortingDTO } from 'src/utils/pagination.dto';
import { MatchService } from './match.service';
import { MulterHelper } from 'src/middlewires/multer.helper';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { join } from 'path';
import { Response } from 'express';
import { MatchUpdateDto } from './matchUpdate.dto';

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

@Controller('match')
@ApiTags('Match')
export class MatchController {
  constructor(private terminalService: MatchService) {}
  @Get('get_all_match_of_a_team/:id')
  @ApiOperation({ summary: 'List All My Matchs' })
  getAl(@Param('id') queryParams: number) {
    return this.terminalService.findAl(queryParams);
  }

  @Get('getallhomematchofteam/:id')
  @ApiOperation({ summary: 'List All My Home Matchs' })
  getAlll(@Param('id') queryParams: number) {
    return this.terminalService.findAlll(queryParams);
  }
  @Get('getall')
  @ApiOperation({ summary: 'List All Matchs' })
  getAll(@Query() queryParams: PaginationSortingDTO) {
    return this.terminalService.findAll(queryParams);
  }



  @Get('all')
  @ApiOperation({ summary: 'List All Matchs foradmin' })
  All() {
    return this.terminalService.findA();
  }

  @Get('saveall')
  @ApiOperation({ summary: 'List All Matchs' })
  getxAll() {
    return this.terminalService.setAll();
  }

  @Get(":id")
    // @UseGuards(JwtAuthGuard)
    // @Roles(Role.ADMIN)
    @ApiOperation({ summary: "List one match" })
    findOne(@Param("id") id:number) {
        return this.terminalService.findOne(id);
    }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update match' })
  update(@Param('id') id: string, @Body() DTO: MatchUpdateDto) {
    return this.terminalService.update(parseInt(id), DTO);
  }
}
