import { ApiPropertyOptional } from "@nestjs/swagger";


export class playersUpdateDto{
    @ApiPropertyOptional({
        description: `name`,
    })
    name:string;

    @ApiPropertyOptional({
        description: `base_price`,
    })
    base_price:number;

    @ApiPropertyOptional({
        description: `sell_price`,
    })
    sell_price:number;

    @ApiPropertyOptional({
        description: `designation`,
    })
    designation:number;

    @ApiPropertyOptional({
        description: `from`,
    })
    from:string;

    @ApiPropertyOptional({
        description: `team_buy`,
    })
    team_buy:number;

    @ApiPropertyOptional({
        description: `age`,
    })
    age:number;

    @ApiPropertyOptional({
        description: `photo`,
    })
    photo:string;

    @ApiPropertyOptional({
        description: `status`,
    })
    status:number;
}