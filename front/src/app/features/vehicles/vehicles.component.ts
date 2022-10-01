import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFilter, faFolder } from '@fortawesome/free-solid-svg-icons';
import { Vehicle } from './types/vehicule.type';
import { VehiclesService } from './vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehiclesList: Vehicle[] | [] = [];
  vehicles: Vehicle[] | [] = [];
  searchTerm: string = '';

  filterIcon: IconProp = faFilter;
  sortIcon: IconProp = faFolder;

  constructor(private vehicleService: VehiclesService) {}

  ngOnInit(): void {
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

}
