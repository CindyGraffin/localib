import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { VehiclesService } from '../vehicles.service';
import { VehicleType } from '../types/vehicle-type.type';
import { VehicleStateType } from '../types/state.type';
import { Vehicle } from '../types/vehicule.type';

@Component({
  selector: 'app-add-vehicle-form',
  templateUrl: './add-vehicle-form.component.html',
  styleUrls: ['./add-vehicle-form.component.css']
})
export class AddVehicleFormComponent  {

  constructor(private vehicleService: VehiclesService) {}

  @Input() vehiclesList: any;
  @Input() addForm!: boolean;

  types: VehicleType[] = ['Voiture', 'Utilitaire', 'Moto', 'Camion'];
  states: VehicleStateType[] = ['A', 'B', 'C', 'D'];

  plusIcon: IconProp = faCirclePlus;

  addVehicle = new FormGroup({
    vehicleModel: new FormControl('', [
      Validators.required, 
      Validators.maxLength(25), 
      Validators.minLength(1), 
      Validators.pattern('^[a-zA-Z0-9àéèçùàïüöû ]{1,25}$')
    ]),
    brand: new FormControl('', [
      Validators.required, 
      Validators.maxLength(25), 
      Validators.minLength(1), 
      Validators.pattern('^[a-zA-Z0-9àéèçùàïüöû ]{1,25}$')
    ]),
    registrationNumber: new FormControl('', [
      Validators.required, 
      Validators.maxLength(7), 
      Validators.minLength(7), 
      Validators.pattern('^[a-zA-Z0-9àéèçùàïüöû ]{1,25}$')
    ]),
    dayPrice: new FormControl('', [
      Validators.required, 
      Validators.maxLength(7), 
      Validators.minLength(2), 
      Validators.pattern('^[0-9]*$'),
    ]),
    vehicleType: new FormControl('', [
      Validators.required
    ]),
    vehicleState: new FormControl('', [
      Validators.required
    ])
  });

  onSubmit() {
    this.vehiclesList.unshift(this.addVehicle.value);
    this.vehicleService.addVehicle(this.addVehicle.value)
                        .subscribe();
    this.addVehicle.reset();
  }
}
