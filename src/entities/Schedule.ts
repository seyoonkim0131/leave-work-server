import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
class Schedule extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "int"})
    userId: number;
    @Column({type: "text"})
    date: string;
    @Column({type: "text"})
    startTime: string;
    @Column({type: "text"})
    endTime: string;
    @Column({type: "text"})
    overTime: string;
    @Column({type: "text", default: "N"})
    break: string;
}

export default Schedule;