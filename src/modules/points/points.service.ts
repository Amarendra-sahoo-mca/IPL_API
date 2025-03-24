import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DropdownType, IResponse } from 'src/interfaces/api.response';
import Messages from 'src/constants/messages';
import { ExcelService } from 'src/utils/globalServices/excel.service';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { PointsDto } from './points.dto';
import { playersEntity } from 'src/entities/player.entity';
import { PointEntity } from 'src/entities/points.entity';
import { log } from 'util';
import { TeamEntity } from 'src/entities/team.entity';



@Injectable()
export class PointsService {
  constructor(
    @InjectRepository(PointEntity) private repository: Repository<PointEntity>,
   
    // private readonly excelService: ExcelService
  ) {}

  async save(AgentCommissiomtoUploadtDto: PointsDto) {
    try {
      const createdResponse = await this.repository.save(
        AgentCommissiomtoUploadtDto
      );

      const response: IResponse = {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: `Points ${Messages.SAVE}`,
        data: createdResponse,
      };
      return response;
    } catch (error: any) {
      const response: IResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        message: `Admin ${Messages.SAVE_FAIL}`,
        data: error,
      };
      return response;
    }
  }

  async findAll() {

    try{
    const response =await  this.repository.createQueryBuilder('point')
                .leftJoinAndMapOne('point.team_data',TeamEntity,'team','point.team = team.id')
                .orderBy('point.points','DESC')
                .addOrderBy('CAST(point.run_rate AS DECIMAL)', 'DESC')
                .getMany();
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: `Points`,

      data: response,
    } as IResponse;
  }catch(err:any){
    const response: IResponse = {
      statusCode: HttpStatus.BAD_REQUEST,
      success: false,
      message: `no data found`,
      data: err,
    };
    return response;
  }
  }

  async update(id: number,dto:PointsDto) {
    try {   
    const response = await this.repository.findOneBy({id});
    const user = response;
    if (!user) {
        const response: IResponse = {
            statusCode: HttpStatus.BAD_REQUEST,
            success: false,
            message: `Points ${Messages.NOT_FOUND}`,
            data: null,
        };
        return response;
      }
        
      const updatedObj = this.repository.merge(user, dto);
      const updatedResponse = await this.repository.update(id, updatedObj);
         
        return {
            statusCode: HttpStatus.OK,
            success: true,
            message: `Points ${Messages.UPDATE}`,
            data: updatedResponse
        };
    } catch (error: any) {
      console.log(error);
      
        const response: IResponse = {
            statusCode: HttpStatus.BAD_REQUEST,
            success: false,
            message: `Points  ${Messages.UPDATE_FAILURE}`,
            data: error,
        };
        return response;
    }
}



}
