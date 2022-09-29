import { Renting } from 'src/renting/entities/renting.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,  Unique,  UpdateDateColumn} from 'typeorm';
import { GenderType } from '../types/gender.type';

@Entity()
@Unique(['email'])
export class Customer {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    gender: GenderType;
    
    @Column()
    dateOfBirth: Date;
    
    @Column({name: 'customer_email'}) 
    email: string;
    
    @Column()
    phone: string;

    @CreateDateColumn() 
    createdAt: Date 
    
    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Renting, (renting) => renting.id)
    rentings: Renting[]
}