import { player_Role, player_status } from "src/enums/common.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("team_points")
export class PointEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    team: number;
    
    @Column()
    match: number;

    @Column()
    win: number;
    
    @Column()
    lose: number;

    @Column()
    run_rate: string;

    @Column()
    points: number;

    @Column()
    last_five_match: string;

    @CreateDateColumn()
    created_on: Date;

    @UpdateDateColumn()
    modified_on: Date;
}