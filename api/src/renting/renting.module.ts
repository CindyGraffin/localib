import { Module } from '@nestjs/common';
import { RentingService } from './renting.service';
import { RentingController } from './renting.controller';
import { Renting } from './entities/renting.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customer/entities/customer.entity';
import { CustomerModule } from 'src/customer/customer.module';
import { VehicleModule } from 'src/vehicle/vehicle.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, Renting, Customer]), CustomerModule, VehicleModule],
  controllers: [RentingController],
  providers: [RentingService]
})
export class RentingModule {}
