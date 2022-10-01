import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { CustomersService } from '../customers.service';
import { Customer } from '../types/customer.type';
import { GenderType } from '../types/gender.type';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-customer-form',
  templateUrl: './update-customer-form.component.html',
  styleUrls: ['./update-customer-form.component.css']
})
export class UpdateCustomerFormComponent {

  constructor(private customersService: CustomersService) {}

  @Input() customer!: Customer;
  @Input() updateCustomer!: boolean;
  @Output() toggleEditEvent = new EventEmitter<any>();

  validateIcon: IconProp = faCircleCheck;

  genders: GenderType[] = ['Homme', 'Femme'];
  
  updateCustomerInfos(customer: Customer) {
    this.customersService.updateCustomerById(customer.id!, customer)
                          .subscribe();
    this.changeUpdateCustomer(this.updateCustomer);
  }

  changeUpdateCustomer(updateCustomer: boolean) {
    this.toggleEditEvent.emit(!updateCustomer);
  }
}
