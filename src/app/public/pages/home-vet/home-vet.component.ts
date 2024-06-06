import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-vet',
  templateUrl: './home-vet.component.html',
  styleUrl: './home-vet.component.css'
})
export class HomeVetComponent {
  private _router = inject(Router);
}
