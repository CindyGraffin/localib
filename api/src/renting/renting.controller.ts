import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentingService } from './renting.service';
import { CreateRentingDto, UpdateRentingDto, RentingDto } from './dto/renting.dto';

@Controller('rentings')
export class RentingController {
  constructor(private readonly rentingService: RentingService) {}

  @Post()
  createRenting(@Body() createRentingDto: CreateRentingDto) {
    return this.rentingService.createRenting(createRentingDto);
  }

  @Get()
  findAll(): Promise<RentingDto[]> {
    return this.rentingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RentingDto> {
    return this.rentingService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentingDto: UpdateRentingDto): Promise<UpdateRentingDto> {
    return this.rentingService.updateById(id, updateRentingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.rentingService.deleteById(id);
  }
}
