import { Component, OnInit } from '@angular/core';
import { Icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faFilter, faFolder, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { RentingPopulateType } from '../management/types/renting-populate.type';
import { Vehicle } from '../vehicles/types/vehicule.type';
import { VehiclesService } from '../vehicles/vehicles.service';
import { RentingsService } from './rentings.service';

@Component({
  selector: 'app-rentings',
  templateUrl: './rentings.component.html',
  styleUrls: ['./rentings.component.css']
})
export class RentingsComponent implements OnInit {

  rentingsList: RentingPopulateType[] | [] = [];
  vehiclesList: Vehicle[] | [] = [];
  vehicles: Vehicle[] | [] = [];
  searchTerm: string = '';
  startDateTemp: Date | undefined;
  endDateTemp: Date | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;
  filteredRentingsList: RentingPopulateType[] | [] = [];

  filterIcon: IconProp = faFilter;
  calendarIcon: IconProp = faCalendarCheck;
  sortIcon: IconProp = faFolder;
  searchIcon: IconProp = faMagnifyingGlass;

  constructor(private vehicleService: VehiclesService, private rentingService: RentingsService) {}

  ngOnInit(): void {
    this.rentingService.getRentingsList()
                        .subscribe((rentingsList) => (this.rentingsList = rentingsList));
    this.vehicleService.getVehiclesList()
                        .subscribe((vehiclesList) => (this.vehiclesList = vehiclesList, this.vehicles = vehiclesList));
  }

  searchVehicles(event: KeyboardEvent) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    if (this.searchTerm === '') {
      this.vehicles = this.vehiclesList;
    } else {
      this.vehicles = this.vehiclesList.filter((vehicle: Vehicle) => vehicle.vehicleModel.toLowerCase().includes(this.searchTerm.toLowerCase()) || vehicle.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) ||  (vehicle.brand + ' ' + vehicle.vehicleModel).toLowerCase().includes(this.searchTerm.toLowerCase()) ||  (vehicle.vehicleModel + ' ' + vehicle.brand).toLowerCase().includes(this.searchTerm.toLowerCase()));
    }  
  }

  searchVehiclesAvailables() {
    this.startDate = this.startDateTemp;;
    this.endDate = this.endDateTemp;
    this.vehicles = this.vehiclesList;
  } 
}
