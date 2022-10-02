import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentingsService } from '../rentings/rentings.service';
import { RentingCardComponent } from './renting-card/renting-card.component';



@NgModule({
  declarations: [
    ManagementComponent,
    RentingCardComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    RentingsService
  ]
})
export class ManagementModule { }
