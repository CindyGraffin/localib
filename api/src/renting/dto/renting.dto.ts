import { Customer } from "src/customer/entities/customer.entity";
import { Vehicle } from "src/vehicle/entities/vehicle.entity";

export class RentingDto {
    id: string;
    startDate: Date;
    endDate: Date;
    vehicle: Vehicle;
    tenant: Customer;
    totalPrice: number;
} 

export class CreateRentingDto extends RentingDto {}

export class UpdateRentingDto extends CreateRentingDto {}
