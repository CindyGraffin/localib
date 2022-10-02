import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteButtonDirective } from 'src/app/shared/button/directives/white-button.directive';
import { SectionTitleComponent } from 'src/app/shared/section-title/section-title.component';
import { IconComponent } from 'src/app/shared/icon/icon.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { ButtonShadowDirective } from 'src/app/shared/button/directives/button-shadow.directive';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { BlueLightButtonDirective } from 'src/app/shared/button/directives/blue-light-button.directive';
import { BlueButtonDirective } from 'src/app/shared/button/directives/blue-button.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VehicleCardComponent } from '../features/vehicles/vehicle-card/vehicle-card.component';
import { UpdateVehicleFormComponent } from '../features/vehicles/update-vehicle-form/update-vehicle-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentingFormComponent } from '../features/rentings/renting-form/renting-form.component';

@NgModule({
  declarations: [
    BlueButtonDirective,
    BlueLightButtonDirective,
    ButtonComponent,
    ButtonShadowDirective,
    IconComponent,
    NavbarComponent,
    SectionTitleComponent,
    UpdateVehicleFormComponent,
    VehicleCardComponent,
    WhiteButtonDirective,
    RentingFormComponent
    ],
    imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
    ],
    exports: [
    BlueButtonDirective,
    BlueLightButtonDirective,
    ButtonComponent,
    ButtonShadowDirective,
    IconComponent,
    NavbarComponent,
    SectionTitleComponent,
    UpdateVehicleFormComponent,
    VehicleCardComponent,
    WhiteButtonDirective,
    RentingFormComponent
    ]
})
export class SharedModule { }