
import { Customer } from 'src/customer/entities/customer.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Entity, ManyToOne, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Renting {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    totalPrice: number;

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.id)
    vehicle: Vehicle;

    @ManyToOne(() => Customer, (customer: Customer) => customer.id)
    customer: Customer;
}
