import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerService } from 'src/customer/customer.service';
import { Customer } from 'src/customer/entities/customer.entity';
import { Renting } from 'src/renting/entities/renting.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { Repository } from 'typeorm';
import { CreateRentingDto, UpdateRentingDto, RentingDto } from './dto/renting.dto';


@Injectable()
export class RentingService {
  constructor(
    @InjectRepository(Renting)
    private readonly rentingRepository: Repository<Renting>,
    private readonly customerService: CustomerService,
    private readonly vehicleService: VehicleService
  ) {}

  async createRenting(newRenting: CreateRentingDto): Promise<RentingDto> {
    const rentingCustomer: Customer = await this.customerService.findById(newRenting.customerId);
    const rentingVehicle: Vehicle = await this.vehicleService.findById(newRenting.vehicleId);
    const renting = new Renting();
    renting.startDate = newRenting.startDate
    renting.endDate = newRenting.endDate
    renting.totalPrice = newRenting.totalPrice
    renting.customer = rentingCustomer;
    renting.vehicle = rentingVehicle;
    await this.rentingRepository.save(renting)
    return renting;
  }

  async findAll(): Promise<RentingDto[]> {
    const rentings = await this.rentingRepository.find({
      relations: {
        vehicle: true,
        customer: true
      }
    });
    return rentings;
  }

  async findById(rentingId: Renting['id']): Promise<RentingDto> {
    const renting = await this.rentingRepository.findOneOrFail({
        where: { id: rentingId },
    });
    return renting;
  }

  async updateById(
    rentingId: Renting['id'],
    updatedRenting: UpdateRentingDto,
  ): Promise<UpdateRentingDto> {
    const renting: Renting = await this.rentingRepository.findOneOrFail({
      where: { id: rentingId },
    });
    renting.startDate = updatedRenting.startDate;
    renting.endDate = updatedRenting.endDate;
    renting.totalPrice = updatedRenting.totalPrice;
    await this.rentingRepository.save(renting);
    return renting;
  }

  async deleteById(rentingId: string): Promise<void> {
    const renting = await this.rentingRepository.findOneOrFail({
      where: { id: rentingId },
    });
    await this.rentingRepository.remove(renting)
  }
}
