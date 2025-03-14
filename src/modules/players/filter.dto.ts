import { ApiPropertyOptional } from "@nestjs/swagger";
import { Sorting } from "src/enums/common.enum";

export abstract class FilterDTO {

    @ApiPropertyOptional({
        description: `page`,
        example: 1,
        default: 1,
        minimum: 1,
    })
    page: number;

    @ApiPropertyOptional({
        description: `name`,
    })
    name: string;

    @ApiPropertyOptional({
        description: `skill`,
    })
    skill: string;

    @ApiPropertyOptional({
        description: `sortBy`,
    })
    sortBy: string;

    @ApiPropertyOptional({
        description: `ASC,DESC`,
        example: Sorting.ASC,
        default: Sorting.ASC,
    })
    sortOrder: 'ASC' | 'DESC';
}