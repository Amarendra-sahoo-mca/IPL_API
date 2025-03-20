import { PointsService } from "./points.service";
import { PointsDto } from "./points.dto";
export declare class FileUploadDto {
    file: any;
}
export declare class PointsController {
    private terminalService;
    constructor(terminalService: PointsService);
    getAll(): Promise<import("../../interfaces/api.response").IResponse>;
    update(id: number, DTO: PointsDto): Promise<import("../../interfaces/api.response").IResponse>;
}
