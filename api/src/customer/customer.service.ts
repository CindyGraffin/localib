import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto, CustomerDto, UpdateCustomerDto } from './dto/customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  
  constructor (
  @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {}

  async createcustomer(newCustomer: CreateCustomerDto): Promise<CustomerDto> {
    const createdCustomer = this.customerRepository.create(newCustomer);
    const customer = await this.customerRepository.save(createdCustomer);
    return customer;
  }

  async findAll(): Promise<CustomerDto[]> {
    const customers = await this.customerRepository.find();
    return customers;
  }

  async findById(customerId: Customer['id']): Promise<Customer> {
    const customer = await this.customerRepository.findOneOrFail({
        where: { id: customerId },
    });
    return customer;
  }

  async updateById (
    customerId: Customer['id'],
    updatedCustomer: UpdateCustomerDto,
  ): Promise<UpdateCustomerDto> {
    const customer: Customer = await this.customerRepository.findOneOrFail({
      where: { id: customerId },
    });
    customer.firstName = updatedCustomer.firstName;
    customer.lastName = updatedCustomer.lastName;
    customer.email = updatedCustomer.email;
    customer.phone = updatedCustomer.phone;
    await this.customerRepository.save(customer);
    return customer;
  }

  async deleteById(customerId: string): Promise<void> {
    const customer = await this.customerRepository.findOneOrFail({
      where: { id: customerId },
    });
    await this.customerRepository.remove(customer);
  }
}
