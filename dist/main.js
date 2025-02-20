"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const configService = app.get(config_1.ConfigService);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('IPL 2025 API')
        .setDescription('IPL 2025 API description')
        .setVersion('1.0')
        .addTag('IPL_2025')
        .setContact("AM", "amar_portfolio.com", "sahooamarendra241@gmail.com")
        .addBearerAuth({
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "JWT",
        description: "Enter JWT token",
        in: "header"
    }, "JWT-auth")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('documentation', app, document);
    const port = configService.get("PORT");
    await app.listen(port);
    app.enableCors();
    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`Documentation is running on: http://localhost:${port}/documentation`);
}
bootstrap();
//# sourceMappingURL=main.js.map