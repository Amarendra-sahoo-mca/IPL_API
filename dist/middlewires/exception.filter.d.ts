import { ExceptionFilter, ArgumentsHost } from "@nestjs/common";
export declare class AllExceptionsFilter implements ExceptionFilter {
    constructor();
    catch(exception: any, host: ArgumentsHost): void;
}
