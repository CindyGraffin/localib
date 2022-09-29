import {GenderType} from './gender.type';

export class Customer {
    id!: string;
    firstName!: string;
    lastName!: string;
    gender!: GenderType;
    dateOfBirth!: Date;
    email!: string;
    phone!: string;
}  