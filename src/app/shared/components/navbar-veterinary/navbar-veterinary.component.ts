import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-veterinary',
  templateUrl: './navbar-veterinary.component.html',
  styleUrl: './navbar-veterinary.component.css'
})
export class NavbarVeterinaryComponent {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
