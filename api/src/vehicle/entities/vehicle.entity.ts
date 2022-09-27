import { Renting } from 'src/renting/entities/renting.entity';
import { Entity, OneToMany, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'
import { VehicleState, VehicleType } from '../types/VehiculeTypes';

@Entity()
export class Vehicle {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    vehicleModel: string;

    @Column()
    brand: string

    @Column()
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
}
