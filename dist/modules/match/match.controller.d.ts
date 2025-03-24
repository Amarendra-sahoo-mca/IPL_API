import { PaginationSortingDTO } from 'src/utils/pagination.dto';
import { MatchService } from './match.service';
import { MatchUpdateDto } from './matchUpdate.dto';
export declare class FileUploadDto {
    file: any;
}
export declare class MatchController {
    private terminalService;
    constructor(terminalService: MatchService);
    getAl(queryParams: number): Promise<import("../../interfaces/api.response").IResponse>;
    getAlll(queryParams: number): Promise<import("../../interfaces/api.response").IResponse>;
    getAll(queryParams: PaginationSortingDTO): Promise<import("../../interfaces/api.response").IResponse>;
    All(): Promise<import("../../interfaces/api.response").IResponse>;
    getxAll(): Promise<import("../../interfaces/api.response").IResponse>;
    findOne(id: number): Promise<import("../../interfaces/api.response").IResponse>;
    update(id: string, DTO: MatchUpdateDto): Promise<import("../../interfaces/api.response").IResponse>;
}
