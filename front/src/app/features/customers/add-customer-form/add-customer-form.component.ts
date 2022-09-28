import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenderType } from '../types/gender.type';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.css']
})
export class AddCustomerFormComponent {

  genders: GenderType[] = ['Homme', 'Femme']

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
  }
}
