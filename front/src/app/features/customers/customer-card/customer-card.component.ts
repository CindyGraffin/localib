import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDays, faCheck, faEnvelope, faPenToSquare, faPhone, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CustomersService } from '../customers.service';
import { Customer } from '../types/customer.type';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent  {

  constructor(private customersService: CustomersService) {}

  @Input() customer!: Customer;
  @Input() customersList!: Customer[] | undefined;

  updateCustomer: boolean = false;
  deleteCustomer: boolean = false;

  phoneIcon: IconProp = faPhone;
  emailIcon: IconProp = faEnvelope;
  birthdayIcon: IconProp = faCalendarDays;
  editIcon: IconProp = faPenToSquare;
  deleteIcon: IconProp = faTrashCan;
  checkIcon: IconProp = faCheck;
  crossIcon: IconProp = faXmark;

  changeDeleteCustomer() {
    this.deleteCustomer = !this.deleteCustomer
  }

  defDeleteCustomer(customer: Customer) {
    this.customersService.deleteCustomerById(customer.id!).subscribe(() => console.log('deleted'));
    let customerIndex = this.customersList!.indexOf(customer);
    this.customersList!.splice(customerIndex, 1);
  }

  edit() {
    this.updateCustomer = !this.updateCustomer;
  }
}
