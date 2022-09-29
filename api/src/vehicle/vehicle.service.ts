import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleDto, VehicleDto } from './dtos/vehicule.dto';
import { UpdateVehicleDto } from './dtos/vehicule.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehicleService {
  
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>
  ) {}

  async createVehicle(newVehicle: CreateVehicleDto): Promise<VehicleDto> {
    const createdVehicle = this.vehicleRepository.create(newVehicle);
    const vehicle = await this.vehicleRepository.save(createdVehicle);
    return vehicle;
  }

  async findAll(): Promise<VehicleDto[]> {
    const vehicles = await this.vehicleRepository.find();
    return vehicles;
  }

  async findById(vehicleId: Vehicle['id']): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findOneOrFail({
        where: { id: vehicleId }, 
    });
    return vehicle;
  }

  async updateById(
    vehicleId: Vehicle['id'],
    updatedVehicule: UpdateVehicleDto,
  ): Promise<UpdateVehicleDto> {
    const vehicle: Vehicle = await this.vehicleRepository.findOneOrFail({
      where: { id: vehicleId },
    });
    vehicle.brand = updatedVehicule.brand;
    vehicle.disponibility = updatedVehicule.disponibility;
    vehicle.dayPrice = updatedVehicule.dayPrice;
    vehicle.vehicleModel = updatedVehicule.vehicleModel;
    vehicle.vehicleState = updatedVehicule.vehicleState;
    vehicle.vehicleType = updatedVehicule.vehicleType;
    await this.vehicleRepository.save(vehicle);
    return vehicle;
  }

  async deleteById(vehicleId: string): Promise<void> {
    const vehicle = await this.vehicleRepository.findOneOrFail({
      where: { id: vehicleId },
    });
    await this.vehicleRepository.remove(vehicle)
  } 
}
