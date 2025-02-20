export declare class ExcelService {
    parseExcelFile(file: Express.Multer.File): Promise<any[]>;
    generateExcelFile(data: any[]): Buffer;
}
