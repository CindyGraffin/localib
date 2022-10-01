import { VehicleStateType} from './state.type';
import { VehicleType } from './vehicle-type.type';

export class Vehicle {
    id?: string;
    vehicleModel!: string;
    brand!: string;
    registrationNumber!: string;
    dayPrice!: number;
    vehicleType!: VehicleType;
    vehicleState!: VehicleStateType;
    disponibility!: boolean;
}  

export interface CreateCustomer extends Omit<Vehicle, 'id'> {}