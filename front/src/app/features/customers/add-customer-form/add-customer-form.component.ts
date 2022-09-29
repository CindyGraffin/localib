import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Customer } from '../types/customer.type';
import { GenderType } from '../types/gender.type';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.css']
})
export class AddCustomerFormComponent {

  @Input() customersList: Customer[] | undefined

  genders: GenderType[] = ['Homme', 'Femme']
  plusIcon: IconProp = faCirclePlus

  addCustomer = new FormGroup({
    firstName: new FormControl('', [
      Validators.required, 
      Validators.maxLength(25), 
      Validators.minLength(1), 
      Validators.pattern('^[a-zA-Z0-9àéèçùàïüöû]{1,25}$')
    ]),
    lastName: new FormControl('', [
      Validators.required, 
      Validators.maxLength(25), 
      Validators.minLength(1), 
      Validators.pattern('^[a-zA-Z0-9àéèçùàïüöû]{1,25}$')
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(7), 
      Validators.pattern('^[0-9]*$'),
    ]),
    birthday: new FormControl('', [
      Validators.required, 
    ]),
    gender: new FormControl('', [
      Validators.required, 
    ])
  })

  onSubmit() {
    
    console.table(this.addCustomer.value)
    console.table(this.customersList)
  }
}
