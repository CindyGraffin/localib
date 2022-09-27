import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,  UpdateDateColumn} from 'typeorm';

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
}