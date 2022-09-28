import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { BlueButtonDirective } from './shared/button/directives/blue-button.directive';
import { IconComponent } from './shared/icon/icon.component';
import { ButtonShadowDirective } from './shared/button/directives/button-shadow.directive';
import { BlueLightButtonDirective } from './shared/button/directives/blue-light-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BlueButtonDirective,
    IconComponent,
    ButtonShadowDirective,
    BlueLightButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
