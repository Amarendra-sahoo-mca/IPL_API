import { Repository } from "typeorm";
import { Response } from 'express';
import { TeamService } from "./teams.service";
import { TeamEntity } from "src/entities/team.entity";
import { teamDto } from "./teams.dto";
export declare class FileUploadDto {
    file: any;
}
export declare class TeamController {
    private terminalService;
    private repository;
    constructor(terminalService: TeamService, repository: Repository<TeamEntity>);
    getAll(): Promise<import("../../interfaces/api.response").IResponse>;
    findOne(id: number): Promise<import("../../interfaces/api.response").IResponse>;
    getSingleFiles(filePath: string, res: Response): Promise<void>;
    update(id: string, files: Array<Express.Multer.File>): Promise<import("../../interfaces/api.response").IResponse>;
    save(DTO: teamDto): Promise<import("../../interfaces/api.response").IResponse>;
}
