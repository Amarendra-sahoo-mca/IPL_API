import { IResponse } from 'src/interfaces/api.response';
import { PaginationSortingDTO } from 'src/utils/pagination.dto';
import { ExcelService } from 'src/utils/globalServices/excel.service';
import { TeamEntity } from 'src/entities/team.entity';
import { Repository } from 'typeorm';
import { MatchEntity } from 'src/entities/match.entity';
import { MatchUpdateDto } from './matchUpdate.dto';
import { PointEntity } from 'src/entities/points.entity';
export declare class MatchService {
    private repository;
    private PointRepository;
    private teamRepository;
    private readonly excelService;
    constructor(repository: Repository<MatchEntity>, PointRepository: Repository<PointEntity>, teamRepository: Repository<TeamEntity>, excelService: ExcelService);
    findAll(queryParams: PaginationSortingDTO): Promise<IResponse>;
    findA(): Promise<IResponse>;
    findAl(id: number): Promise<IResponse>;
    findAlll(id: number): Promise<IResponse>;
    setAll(): Promise<IResponse>;
    findOne(id: number): Promise<IResponse>;
    update(id: number, PlayerDTO: MatchUpdateDto): Promise<IResponse>;
}
