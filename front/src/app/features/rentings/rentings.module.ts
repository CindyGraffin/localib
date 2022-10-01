import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentingsComponent } from './rentings.component';
import { RentingsRoutingModule } from './rentings-routing.module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RentingsComponent
  ],
  imports: [
    CommonModule,
    RentingsRoutingModule,
    VehiclesModule,
    SharedModule
  ],
})
export class RentingsModule { }
