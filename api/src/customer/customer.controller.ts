import { Controller, Body, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto, CustomerDto, UpdateCustomerDto } from './dto/customer.dto';

@Controller('Customers')
export class CustomerController {
  
  constructor(private readonly CustomerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto): Promise<CustomerDto> {
    return this.CustomerService.createcustomer(createCustomerDto);
  }

  @Get()
  findAll(): Promise<CustomerDto[]> {
    return this.CustomerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CustomerDto> {
    return this.CustomerService.findById(id);
  }

  @Patch(':id') 
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto): Promise<UpdateCustomerDto> {
    return this.CustomerService.updateById(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.CustomerService.deleteById(id);
  }
}
