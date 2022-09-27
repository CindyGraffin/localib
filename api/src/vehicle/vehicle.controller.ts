import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateVehicleDto, UpdateVehicleDto, VehicleDto } from './dtos/vehicule.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
  
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  createVehicle(@Body() createVehicleDto: CreateVehicleDto): Promise<VehicleDto> {
    return this.vehicleService.createVehicle(createVehicleDto);
  }

  @Get()
  findAll(): Promise<VehicleDto[]> {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<VehicleDto> {
    return this.vehicleService.findById(id);
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() updatedVehicle: UpdateVehicleDto):Promise<UpdateVehicleDto> {
    return this.vehicleService.updateById(id, updatedVehicle);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<void> {
    return this.vehicleService.deleteById(id);
  }
}
