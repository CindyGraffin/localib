import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { BlueButtonDirective } from 'src/app/shared/button/directives/blue-button.directive';
import { IconComponent } from 'src/app/shared/icon/icon.component';
import { ButtonShadowDirective } from 'src/app/shared/button/directives/button-shadow.directive';
import { BlueLightButtonDirective } from 'src/app/shared/button/directives/blue-light-button.directive';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomerRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [
    AddCustomerFormComponent,
    CustomerCardComponent,
    CustomersComponent,
    ButtonComponent,
    BlueButtonDirective,
    IconComponent,
    ButtonShadowDirective,
    BlueLightButtonDirective,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CustomerRoutingModule
  ]
})
export class CustomersModule { }
