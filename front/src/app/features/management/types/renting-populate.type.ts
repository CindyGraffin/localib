import { Customer } from "../../customers/types/customer.type";
import { Vehicle } from "../../vehicles/types/vehicule.type";

export class RentingPopulateType {
    id?: string;
    startDate!: Date;
    endDate!: Date;
    vehicle!: Vehicle;
    customer!: Customer;
    totalPrice!: number;
}  