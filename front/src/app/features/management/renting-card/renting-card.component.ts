import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faEye, faFileLines, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RentingsService } from '../../rentings/rentings.service';
import { RentingPopulateType } from '../types/renting-populate.type';

@Component({
  selector: 'app-renting-card',
  templateUrl: './renting-card.component.html',
  styleUrls: ['./renting-card.component.css']
})
export class RentingCardComponent {

  validateIcon: IconProp = faCircleCheck;
  deleteIcon: IconProp = faTrashCan;
  invoiceIcon: IconProp = faFileLines;
  eyeIcon: IconProp = faEye;

  deleteRenting: boolean = false;

  @Input() renting!: RentingPopulateType;
  @Input() rentingsList!: RentingPopulateType[];

  constructor(private rentingService: RentingsService) { }

  changeDeleteRenting() {
    this.deleteRenting = !this.deleteRenting
  }

  deleteLocationById(renting: RentingPopulateType) {
    this.rentingService.deleteRentingById(renting.id!).subscribe();
    let rentingIndex = this.rentingsList!.indexOf(renting);
    this.rentingsList!.splice(rentingIndex, 1);
  }

}
