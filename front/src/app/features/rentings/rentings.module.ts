import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentingsComponent } from './rentings.component';
import { RentingsRoutingModule } from './rentings-routing.module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentingsService } from './rentings.service';

@NgModule({
  declarations: [
    RentingsComponent
  ],
  imports: [
    CommonModule,
    RentingsRoutingModule,
    VehiclesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RentingsModule { }
