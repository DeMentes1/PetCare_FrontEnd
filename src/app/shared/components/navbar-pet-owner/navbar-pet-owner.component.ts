import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-pet-owner',
  templateUrl: './navbar-pet-owner.component.html',
  styleUrl: './navbar-pet-owner.component.css'
})
export class NavbarPetOwnerComponent {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
