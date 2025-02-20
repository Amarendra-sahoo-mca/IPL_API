import { PaginationSortingDTO } from "src/utils/pagination.dto";
import { MatchService } from "./match.service";
export declare class FileUploadDto {
    file: any;
}
export declare class MatchController {
    private terminalService;
    constructor(terminalService: MatchService);
    getAl(queryParams: number): Promise<import("../../interfaces/api.response").IResponse>;
    getAlll(queryParams: number): Promise<import("../../interfaces/api.response").IResponse>;
    getAll(queryParams: PaginationSortingDTO): Promise<import("../../interfaces/api.response").IResponse>;
    getxAll(): Promise<import("../../interfaces/api.response").IResponse>;
}
