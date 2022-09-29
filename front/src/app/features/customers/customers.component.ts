import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
