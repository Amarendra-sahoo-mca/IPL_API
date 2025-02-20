import { PaginationSortingDTO } from "src/utils/pagination.dto";
import { playersService } from "./players.service";
import { Repository } from "typeorm";
import { Response } from 'express';
import { playersEntity } from "src/entities/player.entity";
export declare class FileUploadDto {
    file: any;
}
export declare class playersController {
    private terminalService;
    private repository;
    constructor(terminalService: playersService, repository: Repository<playersEntity>);
    getAll(queryParams: PaginationSortingDTO): Promise<import("../../interfaces/api.response").IResponse>;
    getAlll(): Promise<import("../../interfaces/api.response").IResponse>;
    getAllbyname(name: string, queryParams: PaginationSortingDTO): Promise<import("../../interfaces/api.response").IResponse>;
    findOne(id: number): Promise<import("../../interfaces/api.response").IResponse>;
    save(body: any, files: Express.Multer.File[]): Promise<import("../../interfaces/api.response").IResponse>;
    importExcel(file: Express.Multer.File): Promise<any>;
    getFile(docId: number, res: Response): Promise<void>;
    update(id: string, userDTO: any, files: Array<Express.Multer.File>): Promise<import("../../interfaces/api.response").IResponse>;
}
