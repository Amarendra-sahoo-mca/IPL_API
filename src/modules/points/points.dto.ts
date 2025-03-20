import { ApiProperty } from "@nestjs/swagger";


export class PointsDto{
    @ApiProperty()
    team:number;

    @ApiProperty()
    match:number;

    @ApiProperty()
    win:number;

    @ApiProperty()
    lose:number;

    @ApiProperty()
    run_rate:string;

    @ApiProperty({
        description: `points`,
    })
    points:number;

    @ApiProperty({
        description: `last_five_match`,
    })
    last_five_match:string;
}