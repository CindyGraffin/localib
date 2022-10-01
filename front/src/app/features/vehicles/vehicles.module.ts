import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddVehicleFormComponent } from './add-vehicle-form/add-vehicle-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VehiclesComponent,
    AddVehicleFormComponent,
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VehiclesModule { }
