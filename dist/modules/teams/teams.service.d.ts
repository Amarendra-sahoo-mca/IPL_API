import { IResponse } from 'src/interfaces/api.response';
import { ExcelService } from 'src/utils/globalServices/excel.service';
import { TeamEntity } from 'src/entities/team.entity';
import { Repository } from 'typeorm';
export declare class TeamService {
    private repository;
    private readonly excelService;
    constructor(repository: Repository<TeamEntity>, excelService: ExcelService);
    findAll(): Promise<IResponse>;
    update(id: number, files: Express.Multer.File[]): Promise<IResponse>;
    findOne(id: number): Promise<IResponse>;
}
