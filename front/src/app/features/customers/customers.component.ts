import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';
import { CustomersService } from './customers.service';
import { Customer } from './types/customer.type';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customersList: Customer[] | undefined;

  constructor(private customerService: CustomersService) {}

  ngOnInit(): void {
    this.customerService.getCustomersList()
                        .subscribe((customersList) => (this.customersList = customersList))
  }

}
