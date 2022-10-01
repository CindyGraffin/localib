import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { BlueButtonDirective } from 'src/app/shared/button/directives/blue-button.directive';
import { IconComponent } from 'src/app/shared/icon/icon.component';
import { ButtonShadowDirective } from 'src/app/shared/button/directives/button-shadow.directive';
import { BlueLightButtonDirective } from 'src/app/shared/button/directives/blue-light-button.directive';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomerRoutingModule } from './customers-routing.module';
import { CustomersService } from './customers.service';
import { WhiteButtonDirective } from 'src/app/shared/button/directives/white-button.directive';
import { UpdateCustomerFormComponent } from './update-customer-form/update-customer-form.component';


@NgModule({
  declarations: [
    AddCustomerFormComponent,
    BlueButtonDirective,
    BlueLightButtonDirective,
    ButtonComponent,
    ButtonShadowDirective,
    CustomerCardComponent,
    CustomersComponent,
    IconComponent,
    NavbarComponent,
    UpdateCustomerFormComponent,
    WhiteButtonDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CustomerRoutingModule
  ],
  providers: [CustomersService]
})
export class CustomersModule { }
