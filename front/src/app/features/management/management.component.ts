import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faFilter, faFolder, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { RentingsService } from '../rentings/rentings.service';
import { RentingPopulateType } from './types/renting-populate.type';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  rentingsList: RentingPopulateType[] | [] = [];
  rentings: RentingPopulateType[] | [] = [];
  searchTermVehicle: string = '';
  searchTermCustomer: string = '';
  startDateTemp: Date | undefined;
  endDateTemp: Date | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;

  filterIcon: IconProp = faFilter;
  calendarIcon: IconProp = faCalendarCheck;
  sortIcon: IconProp = faFolder;
  searchIcon: IconProp = faMagnifyingGlass;

  constructor( private rentingService: RentingsService) { }

  ngOnInit(): void {
    this.rentingService.getRentingsList()
                        .subscribe((rentingsList) => (this.rentingsList = rentingsList, this.rentings = rentingsList));
  }

  searchRentings() {
    this.startDate = this.startDateTemp
    this.endDate = this.endDateTemp
    console.log(this.rentingsList);
    
    
    
  }

  searchRentingsByCustomer(event: KeyboardEvent) {
    this.searchTermCustomer = (event.target as HTMLInputElement).value;
    if (this.searchTermCustomer === '') {
      this.rentings = this.rentingsList;
    } else {
      this.rentings = this.rentingsList.filter((renting: RentingPopulateType) => (renting.customer.firstName + ' ' + renting.customer.lastName).toLowerCase().includes(this.searchTermCustomer.toLowerCase()) || (renting.customer.lastName + ' ' + renting.customer.firstName).toLowerCase().includes(this.searchTermCustomer.toLowerCase()))
    }  
  }

  searchRentingsByVehicle(event: KeyboardEvent) {
    this.searchTermVehicle = (event.target as HTMLInputElement).value;
    if (this.searchTermVehicle === '') {
      this.rentings = this.rentingsList;
    } else {
      this.rentings = this.rentingsList.filter((renting: RentingPopulateType) => renting.vehicle.vehicleModel.toLowerCase().includes(this.searchTermVehicle.toLowerCase()) || renting.vehicle.brand.toLowerCase().includes(this.searchTermVehicle.toLowerCase()) ||  (renting.vehicle.brand + ' ' + renting.vehicle.vehicleModel).toLowerCase().includes(this.searchTermVehicle.toLowerCase()) ||  (renting.vehicle.vehicleModel + ' ' + renting.vehicle.brand).toLowerCase().includes(this.searchTermVehicle.toLowerCase()))
    }  
  }
}

