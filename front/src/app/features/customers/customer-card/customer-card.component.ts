import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDays, faCircleXmark, faEnvelope, faPenToSquare, faPhone, faSquarePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Customer } from '../types/customer.type';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent  {

  @Input() customer!: Customer;

  phoneIcon: IconProp = faPhone;
  emailIcon: IconProp = faEnvelope;
  birthdayIcon: IconProp = faCalendarDays;
  editIcon: IconProp = faPenToSquare;
  deleteIcon: IconProp = faTrashCan;

}
