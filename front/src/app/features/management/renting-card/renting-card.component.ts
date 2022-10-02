import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faFileLines, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RentingPopulateType } from '../types/renting-populate.type';

@Component({
  selector: 'app-renting-card',
  templateUrl: './renting-card.component.html',
  styleUrls: ['./renting-card.component.css']
})
export class RentingCardComponent implements OnInit {

  validateIcon: IconProp = faCircleCheck;
  deleteIcon: IconProp = faTrashCan;
  invoiceIcon: IconProp = faFileLines;

  deleteRenting: boolean = false;

  @Input() renting!: RentingPopulateType;

  constructor() { }

  ngOnInit(): void {
  }

}
