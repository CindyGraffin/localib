import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Vehicle } from '../types/vehicule.type';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {

  @Input() vehicle!: Vehicle;
  @Input() vehiclesList!: Vehicle[];

  updateVehicle: boolean = false;

  checkIcon: IconProp = faCircleCheck;
  editIcon: IconProp = faPenToSquare;
  crossIcon: IconProp = faCircleXmark;

  edit() {
    this.updateVehicle = !this.updateVehicle;
  }
}
