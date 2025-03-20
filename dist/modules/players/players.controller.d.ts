import { playersService } from "./players.service";
import { Repository } from "typeorm";
import { Response } from 'express';
import { playersEntity } from "src/entities/player.entity";
import { FilterDTO } from "./filter.dto";
export declare class FileUploadDto {
    file: any;
}
export declare class playersController {
    private terminalService;
    private repository;
    constructor(terminalService: playersService, repository: Repository<playersEntity>);
    getAll(queryParams: FilterDTO): Promise<any>;
    getAlll(): Promise<import("../../interfaces/api.response").IResponse>;
    findTop(): Promise<import("../../interfaces/api.response").IResponse>;
    findTopruns(): Promise<import("../../interfaces/api.response").IResponse>;
    findpurplecap(): Promise<import("../../interfaces/api.response").IResponse>;
    findOne(id: number): Promise<import("../../interfaces/api.response").IResponse>;
    save(body: any, files: Express.Multer.File[]): Promise<import("../../interfaces/api.response").IResponse>;
    importExcel(file: Express.Multer.File): Promise<any>;
    getFile(docId: number, res: Response): Promise<void>;
    update(id: string, userDTO: any, files: Array<Express.Multer.File>): Promise<import("../../interfaces/api.response").IResponse>;
}
