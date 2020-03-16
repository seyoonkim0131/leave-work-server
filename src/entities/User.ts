import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import bcrypt from "bcrypt";
import Schedule from "./Schedule";


const BCRYPT_ROUNDS = 10
@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @OneToMany(type => Schedule, schedule => schedule.userId)
    id: number;
    
    @Column({type: "text", unique: true})
    email: string;

    @Column({type: "text"})
    name: string;

    @Column({type: "text", default: "09", nullable: true})
    startH: string;

    @Column({type: "text", default: "00", nullable: true})
    startM: string;

    @Column({type: "text", default: "18", nullable: true})
    endH: string;

    @Column({type: "text", default: "00", nullable: true})
    endM: string;

    @Column({type: "text", nullable: true})
    salary: string;

    @Column({type: "text"})
    password: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    public comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password)
    }

    private hashPassword(password: string): Promise<string>  {
        return bcrypt.hash(password, BCRYPT_ROUNDS);
    }

    @BeforeInsert()
    @BeforeUpdate()
    async savePassword(): Promise<void> {
        //for password
        if(this.password) {
            const hashedPassword = await this.hashPassword(this.password);
            this.password = hashedPassword;
        }
    }
}

export default User;