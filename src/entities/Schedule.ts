import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { YN } from "src/types/types";

import User from "./User"

@Entity()
class Schedule extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    userId: number;

    @ManyToOne(type => User, user => user.id)
    user: User

    @Column({type: "text"})
    date: string;

    @Column({type: "text"})
    startTime: string;

    @Column({type: "text"})
    endTime: string;

    @Column({type: "text"})
    overTime: string;

    @Column({type: "text", default: "N", enum: ["Y", "N"]})
    break: YN;
}

export default Schedule;