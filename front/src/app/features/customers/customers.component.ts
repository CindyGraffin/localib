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

  customersList: Customer[] | undefined;
  newCustomer!: Customer;
  filterIcon: IconProp = faFilter;
  sortIcon: IconProp = faFolder;
  searchTerm: string = ''

  customers: Customer[] | undefined;

  constructor(private customerService: CustomersService) {}

  ngOnInit(): void {
    this.customerService.getCustomersList()
                        .subscribe((customersList) => (this.customersList = customersList));
  }

  updateSearchTerm(event: KeyboardEvent) {
    this.searchTerm
    if (this.searchTerm = '') {
      this.customers = this.customersList
    } else {

    }
    console.log((event.target as HTMLInputElement).value ) 
    
  }

}
