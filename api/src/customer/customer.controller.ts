import { Controller, Body, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';

@Controller('Customer')
export class CustomerController {
  
  constructor(private readonly CustomerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.CustomerService.createcustomer(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.CustomerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CustomerService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.CustomerService.updateById(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CustomerService.deleteById(id);
  }
}
