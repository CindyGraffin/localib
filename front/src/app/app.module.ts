import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './features/customers/customers.module';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesModule } from './features/vehicles/vehicles.module';
import { RentingsModule } from './features/rentings/rentings.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    VehiclesModule,
    HttpClientModule,
    RentingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
