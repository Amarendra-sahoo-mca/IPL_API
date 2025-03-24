import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DropdownType, IResponse } from 'src/interfaces/api.response';

import Messages from 'src/constants/messages';

import { PaginationSortingDTO } from 'src/utils/pagination.dto';
import { applyPagination, applySorting } from 'src/utils/common';

import { ExcelService } from 'src/utils/globalServices/excel.service';
import { TeamEntity } from 'src/entities/team.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { MatchEntity } from 'src/entities/match.entity';
import { Team } from 'src/enums/common.enum';
import { matchdetails } from 'src/utils/data/matchinfo';
import { MatchUpdateDto } from './matchUpdate.dto';
import { PointEntity } from 'src/entities/points.entity';
import { playersEntity } from 'src/entities/player.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity) private repository: Repository<MatchEntity>,
    @InjectRepository(PointEntity)
    private PointRepository: Repository<PointEntity>,
    @InjectRepository(TeamEntity)
    private teamRepository: Repository<TeamEntity>,
    private readonly excelService: ExcelService,
  ) {}

  async findAll(queryParams: PaginationSortingDTO) {
    try {
      const pagination = applyPagination(queryParams.page);
      const order = applySorting(
        queryParams.sortBy,
        queryParams.sortOrder,
        MatchEntity,
      );

      const res = this.repository
        .createQueryBuilder('matches')
        .innerJoinAndMapOne(
          'matches.hometeam_data',
          TeamEntity,
          'team',
          'matches.homeTeam = team.id',
        )
        .innerJoinAndMapOne(
          'matches.awayteam_data',
          TeamEntity,
          'team2',
          'matches.awayTeam = team2.id',
        );

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
        statusCode: HttpStatus.OK,
        success: true,
        message: `matches`,

        data: response,
      } as IResponse;
    } catch (err: any) {
      const response: IResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
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
        .innerJoinAndMapOne(
          'matches.hometeam_data',
          TeamEntity,
          'team',
          'matches.homeTeam = team.id',
        )
        .innerJoinAndMapOne(
          'matches.awayteam_data',
          TeamEntity,
          'team2',
          'matches.awayTeam = team2.id',
        );

      const response = await res.getMany();
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: `matches`,

        data: response,
      } as IResponse;
    } catch (err: any) {
      const response: IResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        message: `no data found`,
        data: err,
      };
      return response;
    }
  }
  async findAl(id: number) {
    try {
      const res = await this.repository
        .createQueryBuilder('matches')
        .innerJoinAndMapOne(
          'matches.hometeam_data',
          TeamEntity,
          'team',
          'matches.homeTeam = team.id',
        )
        .innerJoinAndMapOne(
          'matches.awayteam_data',
          TeamEntity,
          'team2',
          'matches.awayTeam = team2.id',
        )
        .where('matches.homeTeam = :id OR matches.awayTeam = :id', { id })
        .getMany();

      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: `matches`,
        data: res,
      } as IResponse;
    } catch (err: any) {
      const response: IResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        message: `no data found`,
        data: err,
      };
      return response;
    }
  }
  async findAlll(id: number) {
    try {
      const res = await this.repository
        .createQueryBuilder('matches')
        .innerJoinAndMapOne(
          'matches.hometeam_data',
          TeamEntity,
          'team',
          'matches.homeTeam = team.id',
        )
        .innerJoinAndMapOne(
          'matches.awayteam_data',
          TeamEntity,
          'team2',
          'matches.awayTeam = team2.id',
        )
        .where('matches.homeTeam = :id', { id })
        .getMany();

      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: `matches`,

        data: res,
      } as IResponse;
    } catch (err: any) {
      const response: IResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
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
      await Promise.all(
        matchdetails.map(async (match: any) => {
          match.homeTeam = Team[match.homeTeamName as keyof typeof Team];
          match.awayTeam = Team[match.awayTeamName as keyof typeof Team];
          const { homeTeamName, awayTeamName, ...payload } = match;
          // console.log(match.homeTeamName,payload.homeTeam);

          await this.repository.save(payload);
        }),
      );

      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: `match imported successfully`,
        data: null,
      } as IResponse;
    } catch (err: any) {
      const response: IResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        message: `unable to store`,
        data: err,
      };
      return response;
    }
  }
  async findOne(id: number) {
    const response: any = await this.repository
      .createQueryBuilder('match')
      .innerJoinAndMapOne('match.hometeam_data',TeamEntity,'team','match.homeTeam = team.id',)
      .innerJoinAndMapOne('match.awayteam_data',TeamEntity,'team2','match.awayTeam = team2.id',)
      .innerJoinAndMapOne('match.home_team_captain',playersEntity,'hc','team.captain = hc.id',)
      .innerJoinAndMapOne('match.away_team_captain',playersEntity,'ac','team2.captain = ac.id',)
      .where('match.id = :id', { id })
      .getOne();

    return response
      ? ({
          statusCode: HttpStatus.OK,
          success: true,
          message: `players by id`,
          data: response,
        } as IResponse)
      : ({
          statusCode: HttpStatus.NOT_FOUND,
          success: false,
          message: `players not found`,
          data: null,
        } as IResponse);
  }
  async update(id: number, PlayerDTO: MatchUpdateDto) {
    try {
      const user = await this.repository.findOneBy({ id });

      if (!user) {
        const response: IResponse = {
          statusCode: HttpStatus.BAD_REQUEST,
          success: false,
          message: `Match ${Messages.NOT_FOUND}`,
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
      if(updatedObj.wonTeam == updatedObj.homeTeam){
        homeT.win += 1;
        awayT.lose +=1;
        homeT.last_five_match =`${homeT.last_five_match},1`
        awayT.last_five_match =`${awayT.last_five_match},2`
        homeT.points = homeT.win * 2;
        awayT.points = awayT.win * 2;
      }else if(updatedObj.wonTeam == updatedObj.awayTeam){
        awayT.win += 1;
        homeT.lose +=1;
        awayT.last_five_match =`${awayT.last_five_match},1`
        homeT.last_five_match =`${homeT.last_five_match},2`
        homeT.points = homeT.win * 2;
        awayT.points = awayT.win * 2;
      }
      else if(updatedObj.wonTeam == 0){
        awayT.last_five_match =`${awayT.last_five_match},3`;
        homeT.last_five_match =`${homeT.last_five_match},3`;
        homeT.points += 1;
        awayT.points += 1;
        
      }
      await this.PointRepository.save(homeT)
      await this.PointRepository.save(awayT)
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: `Match ${Messages.UPDATE}`,
        data: updatedResponse,
      };
    } catch (error: any) {
      console.log(error);

      const response: IResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        message: `Match ${Messages.UPDATE_FAILURE}`,
        data: error,
      };
      throw response;
    }
  }
}
