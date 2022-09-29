import { Component, OnInit } from '@angular/core';
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


  constructor(private customerService: CustomersService) {}

  ngOnInit(): void {
    this.newCustomer = new Customer();
    this.customerService.getCustomersList()
                        .subscribe((customersList) => (this.customersList = customersList))
  }

}
