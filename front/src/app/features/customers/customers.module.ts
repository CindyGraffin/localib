import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { CustomerRoutingModule } from './customers-routing.module';
import { UpdateCustomerFormComponent } from './update-customer-form/update-customer-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AddCustomerFormComponent,
    CustomerCardComponent,
    CustomersComponent,
    UpdateCustomerFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
