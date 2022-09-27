import { VehicleState, VehicleType } from "../types/VehiculeTypes";

export class VehicleDto {
    id: string;
    vehicleModel: string;
    brand: string;
    registrationNumber: string;
    dayPrice: number;
    vehicleType: VehicleType;
    vehicleState: VehicleState;
    disponibility: boolean;
}

export interface CreateVehicleDto extends Omit<VehicleDto, 'id'> {}

export interface UpdateVehicleDto extends Omit<VehicleDto, 'id'> {}
