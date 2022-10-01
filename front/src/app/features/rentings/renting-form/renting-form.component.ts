import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-renting-form',
  templateUrl: './renting-form.component.html',
  styleUrls: ['./renting-form.component.css']
})
export class RentingFormComponent implements OnInit {

  @Input() vehicleId!: string | undefined;


  constructor() { }

  ngOnInit(): void {
    
  }

}
