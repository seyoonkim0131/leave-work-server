import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "text", unique: true})
    email: string;
    @Column({type: "text"})
    name: string;
    @Column({type: "text", default: "09"})
    startH: string;
    @Column({type: "text", default: "00"})
    startM: string;
    @Column({type: "text", default: "18"})
    endH: string;
    @Column({type: "text", default: "00"})
    endM: string;
    @Column({type: "text"})
    salary: string;
    @Column({type: "text"})
    password: string;
    @CreateDateColumn()
    createdAt: string;
    @UpdateDateColumn()
    updatedAt: string;
}

export default User;