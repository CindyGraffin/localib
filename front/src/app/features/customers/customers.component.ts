import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFilter, faFolder } from '@fortawesome/free-solid-svg-icons';
import { CustomersService } from './customers.service';
import { Customer } from './types/customer.type';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customersList: Customer[] | [] = [];
  customers: Customer[] | [] = [];

  searchTerm: string = '';

  filterIcon: IconProp = faFilter;
  sortIcon: IconProp = faFolder;


  constructor(private customerService: CustomersService) {}

  ngOnInit(): void {
    this.customerService.getCustomersList()
                        .subscribe((customersList) => (this.customersList = customersList, this.customers = customersList));
  }

  searchCustomers(event: KeyboardEvent) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    if (this.searchTerm === '') {
      this.customers = this.customersList;
    } else {
      this.customers = this.customersList.filter((customer: Customer) => (customer.firstName + ' ' + customer.lastName).toLowerCase().includes(this.searchTerm.toLowerCase()) || (customer.lastName + ' ' + customer.firstName).toLowerCase().includes(this.searchTerm.toLowerCase()));
    }  
  }

}
