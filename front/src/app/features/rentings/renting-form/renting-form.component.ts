import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { CustomersService } from '../../customers/customers.service';
import { Customer } from '../../customers/types/customer.type';
import { RentingsService } from '../rentings.service';

@Component({
  selector: 'app-renting-form',
  templateUrl: './renting-form.component.html',
  styleUrls: ['./renting-form.component.css']
})
export class RentingFormComponent implements OnInit {

  @Input() vehicleDayPrice: number | undefined;
  @Input() vehicleId!: string | undefined;
  @Input() startDate: Date | undefined;
  @Input() endDate: Date | undefined;

  validateIcon: IconProp = faCircleCheck;
  successLocation: boolean = false;

  customersList: Customer[] | [] = [];
  customerId: string | undefined;

  constructor(private router: Router, private customerService: CustomersService, private rentingService: RentingsService) { }

  ngOnInit(): void {
    this.customerService.getCustomersList()
                        .subscribe((customersList) => (this.customersList = customersList));
  }

  changeCustomerId(event: Event) {
    this.customerId = (event.target as HTMLInputElement).value;
  }

  createRenting() {
    let dateStart = new Date(this.startDate!);
    let dateEnd = new Date(this.endDate!);
    const diffDays = (dateEnd.getTime() - dateStart.getTime()) / (1000*3600*24) + 1
    let renting = {
      startDate: this.startDate,
      endDate: this.endDate,
      customerId: this.customerId,
      vehicleId: this.vehicleId,
      totalPrice: this.vehicleDayPrice! * diffDays
    }
    this.rentingService.addRenting(renting).subscribe();
    this.startDate = undefined;
    this.endDate = undefined;
    this.successLocation = true;
    setTimeout(() => {
      this.navigateToLocationsManagement()
    }, 3000)
  }

  navigateToLocationsManagement() {
    this.router.navigateByUrl('/management')
  }

}
