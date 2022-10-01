import { PartialType } from '@nestjs/mapped-types';
import { GenderType } from '../types/gender.type';

export class CustomerDto {
    id: string;
    firstName: string;
    lastName: string;
    gender: GenderType;
    dateOfBirth: Date;
    email: string;
    phone: string;
}  

export interface CreateCustomerDto extends Omit<CustomerDto, 'id'> {}

export class UpdateCustomerDto extends PartialType(CustomerDto) {}
