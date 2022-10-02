import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCar, faFileLines, faKey, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  keyIcon: IconProp = faKey;
  fileIcon: IconProp = faFileLines;
  carIcon: IconProp = faCar;
  customerIcon: IconProp = faUserGroup;
  
  @Input() activePage!: string;

  ngOnInit(): void {
  }
  navigateToRentingsManagement() {
    this.router.navigateByUrl('/management')
  }
  navigateToRentings() {
    this.router.navigateByUrl('/rentings')
  }
  navigateToVehicles() {
    this.router.navigateByUrl('/vehicles')
  }
  navigateToCustomers() {
    this.router.navigateByUrl('/customers')
  }

}
