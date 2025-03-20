import { IResponse } from 'src/interfaces/api.response';
import { Repository } from 'typeorm';
import { PointsDto } from './points.dto';
import { PointEntity } from 'src/entities/points.entity';
export declare class PointsService {
    private repository;
    constructor(repository: Repository<PointEntity>);
    save(AgentCommissiomtoUploadtDto: PointsDto): Promise<IResponse>;
    findAll(): Promise<IResponse>;
    update(id: number, dto: PointsDto): Promise<IResponse>;
}
