import { Renting } from 'src/renting/entities/renting.entity';
import { Entity, OneToMany, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique} from 'typeorm'
import { VehicleState, VehicleType } from '../types/VehiculeTypes';

@Entity()
@Unique(['registrationNumber'])
export class Vehicle {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    vehicleModel: string;

    @Column()
    brand: string

    @Column({name: 'registration_number'})
    registrationNumber: string;

    @Column()
    dayPrice: number;

    @Column()
    vehicleType: VehicleType; 

    @Column()
    vehicleState: VehicleState; 

    @Column({default: true})
    disponibility: boolean;

    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Renting, (renting) => renting.id)
    rentings: Renting[]
}
