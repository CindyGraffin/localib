import { Module } from '@nestjs/common';
import { RentingService } from './renting.service';
import { RentingController } from './renting.controller';
import { Renting } from './entities/renting.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customer/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, Renting, Customer])],
  controllers: [RentingController],
  providers: [RentingService]
})
export class RentingModule {}
