import { ApiPropertyOptional } from "@nestjs/swagger";


export class MatchUpdateDto{
   

    @ApiPropertyOptional({
        description: `wonTeam`,
    })
    wonTeam:number;

    @ApiPropertyOptional({
        description: `homeTeamScore`,
    })
    homeTeamScore:string;

   
    @ApiPropertyOptional({
        description: `awayTeamScore`,
    })
    awayTeamScore:string;

    
}