"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    constructor() { }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        console.log(exception);
        const message = exception instanceof Error ? exception.message : exception.message.error || "Something went wrong, please contact support";
        console.log("Exception Message ::: ____________ ", message);
        const statusCode = exception.status;
        const data = exception.response ? exception.response.data : null;
        let finalMessage = "";
        if (message.search('authentication strategy') != -1) {
            finalMessage = "You are not authorized to access. Please login to continue.";
        }
        else {
            finalMessage = message;
        }
        response.status(status).json({
            code: status || statusCode,
            timestamp: new Date().toISOString(),
            status: false,
            message: finalMessage,
            data: data ? data : null
        });
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [])
], AllExceptionsFilter);
//# sourceMappingURL=exception.filter.js.map