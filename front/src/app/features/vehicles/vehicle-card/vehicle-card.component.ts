import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Vehicle } from '../types/vehicule.type';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {

  @Input() vehicle!: Vehicle;

  checkIcon: IconProp = faCircleCheck;
  editIcon: IconProp = faPenToSquare;

}
