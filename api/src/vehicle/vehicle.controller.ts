import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateVehicleDto, UpdateVehicleDto } from './dtos/vehicule.dto';
import { Vehicle } from './entities/vehicle.entity';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  createVehicle(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.createVehicle(createVehicleDto);
  }

  @Get()
  findAll(): Promise<Vehicle[]> {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.findById(id);
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() updatedVehicle: UpdateVehicleDto):Promise<Vehicle> {
    return this.vehicleService.updateById(id, updatedVehicle);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.vehicleService.deleteById(id);
  }
}
