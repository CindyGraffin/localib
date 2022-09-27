export class CustomerDto {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
}  

export interface CreateCustomerDto extends Omit<CustomerDto, 'id'> {}

export class UpdateCustomerDto extends CustomerDto {}
