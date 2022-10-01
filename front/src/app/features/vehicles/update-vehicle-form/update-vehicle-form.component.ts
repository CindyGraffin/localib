import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { VehicleStateType } from '../types/state.type';
import { VehicleType } from '../types/vehicle-type.type';
import { Vehicle } from '../types/vehicule.type';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-update-vehicle-form',
  templateUrl: './update-vehicle-form.component.html',
  styleUrls: ['./update-vehicle-form.component.css']
})
export class UpdateVehicleFormComponent {

  constructor(private vehicleService: VehiclesService) {}

  @Input() vehicle!: Vehicle;
  @Input() updateVehicle!: boolean;
  @Output() toggleEditEvent = new EventEmitter<any>();

  validateIcon: IconProp = faCircleCheck;

  vehicleStates: VehicleStateType[] = ['A', 'B', 'C', 'D'];
  vehicleTypes: VehicleType[] = ['Voiture', 'Camion', 'Utilitaire', 'Moto'];
  
  updateVehicleInfos(vehicle: Vehicle) {
    this.vehicleService.updateVehicleById(vehicle.id!, vehicle)
                          .subscribe();
    this.changeUpdateVehicle(this.updateVehicle);
  }

  changeUpdateVehicle(updateVehicle: boolean) {
    this.toggleEditEvent.emit(!updateVehicle);
  }

}
