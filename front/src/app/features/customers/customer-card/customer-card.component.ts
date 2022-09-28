import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDays, faCircleXmark, faEnvelope, faPenToSquare, faPhone, faSquarePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent  {

  phoneIcon: IconProp = faPhone;
  emailIcon: IconProp = faEnvelope;
  birthdayIcon: IconProp = faCalendarDays;
  editIcon: IconProp = faPenToSquare;
  deleteIcon: IconProp = faTrashCan;

}
