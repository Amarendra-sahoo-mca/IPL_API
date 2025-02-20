import { IResponse } from 'src/interfaces/api.response';
import { playersDto } from './players.dto';
import { PaginationSortingDTO } from 'src/utils/pagination.dto';
import { playersEntity } from 'src/entities/player.entity';
import { ExcelService } from 'src/utils/globalServices/excel.service';
import { TeamEntity } from 'src/entities/team.entity';
import { Repository } from 'typeorm';
export declare class playersService {
    private repository;
    private teamRepository;
    private readonly excelService;
    constructor(repository: Repository<playersEntity>, teamRepository: Repository<TeamEntity>, excelService: ExcelService);
    findAll(queryParams: PaginationSortingDTO): Promise<IResponse>;
    setimage(): Promise<IResponse>;
    findAllbyname(queryParams: PaginationSortingDTO, name: string): Promise<IResponse>;
    importFromExcel(file: Express.Multer.File): Promise<any>;
    update(id: number, userdocumentDTO: playersDto, files: Express.Multer.File[]): Promise<IResponse>;
    findOne(id: number): Promise<IResponse>;
    save(Dtos: playersDto, files: Express.Multer.File[]): Promise<IResponse>;
}
