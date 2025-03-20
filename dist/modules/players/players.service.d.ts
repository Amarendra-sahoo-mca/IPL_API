import { IResponse } from 'src/interfaces/api.response';
import { playersDto } from './players.dto';
import { PaginationSortingDTO } from 'src/utils/pagination.dto';
import { playersEntity } from 'src/entities/player.entity';
import { ExcelService } from 'src/utils/globalServices/excel.service';
import { TeamEntity } from 'src/entities/team.entity';
import { Repository } from 'typeorm';
import { FilterDTO } from './filter.dto';
import { PointEntity } from 'src/entities/points.entity';
export declare class playersService {
    private repository;
    private teamRepository;
    private pointRepository;
    private readonly excelService;
    constructor(repository: Repository<playersEntity>, teamRepository: Repository<TeamEntity>, pointRepository: Repository<PointEntity>, excelService: ExcelService);
    findAll(queryParams: FilterDTO): Promise<any>;
    setimage(): Promise<IResponse>;
    setdebut(): Promise<IResponse>;
    setnetionality(): Promise<IResponse>;
    findAllbyname(queryParams: PaginationSortingDTO, name: string): Promise<IResponse>;
    importFromExcel(file: Express.Multer.File): Promise<any>;
    update(id: number, userdocumentDTO: playersDto, files: Express.Multer.File[]): Promise<IResponse>;
    findOne(id: number): Promise<IResponse>;
    findTop(): Promise<IResponse>;
    orangecap(): Promise<IResponse>;
    purplecap(): Promise<IResponse>;
    save(Dtos: playersDto, files: Express.Multer.File[]): Promise<IResponse>;
}
