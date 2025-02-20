"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmAsyncConfig = void 0;
const config_1 = require("@nestjs/config");
const glob_1 = require("glob");
const match_entity_1 = require("../entities/match.entity");
const player_entity_1 = require("../entities/player.entity");
const team_entity_1 = require("../entities/team.entity");
const teamLogo_entity_1 = require("../entities/teamLogo.entity");
const util_1 = require("util");
const globPromise = (0, util_1.promisify)(glob_1.glob);
exports.typeOrmAsyncConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (config) => {
        return {
            type: "mysql",
            host: process.env.DB_HOST || config.get('DB_HOST'),
            port: parseInt(process.env.DB_PORT, 10) ||
                parseInt(config.get('DB_PORT'), 10),
            username: process.env.DB_USERNAME || config.get('DB_USERNAME'),
            database: process.env.DB_NAME || config.get('DB_NAME'),
            password: process.env.DB_PASSWORD || config.get('DB_PASSWORD'),
            entities: [
                player_entity_1.playersEntity, team_entity_1.TeamEntity, teamLogo_entity_1.TeamLogoEntity, match_entity_1.MatchEntity
            ],
            extra: {
                charset: 'utf8mb4_unicode_ci',
            },
            synchronize: true,
        };
    }
};
//# sourceMappingURL=typeorm.config.js.map