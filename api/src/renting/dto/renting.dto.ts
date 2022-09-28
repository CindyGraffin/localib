import { PartialType } from '@nestjs/mapped-types';
import { CustomerDto } from "src/customer/dto/customer.dto";
import { VehicleDto } from "src/vehicle/dtos/vehicule.dto";

export class RentingDto {
    id: string;
    startDate: Date;
    endDate: Date;
    vehicle: VehicleDto;
    customer: CustomerDto;
    totalPrice: number;
} 

export class CreateRentingDto extends RentingDto {
    customerId: string;
    vehicleId: string;
}

export class UpdateRentingDto extends PartialType(CreateRentingDto) {}

