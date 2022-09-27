import { Renting } from 'src/renting/entities/renting.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,  UpdateDateColumn} from 'typeorm';

@Entity()
export class Customer {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @Column()
    dateOfBirth: Date;
    
    @Column()
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