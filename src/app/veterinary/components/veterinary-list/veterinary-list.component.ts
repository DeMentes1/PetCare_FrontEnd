import {Component, Input, OnInit} from '@angular/core';
import {VeterinaryEntity} from "../../model/veterinary-entity";
import {VeterinaryService} from "../../services/veterinary.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-veterinary-list',
  templateUrl: './veterinary-list.component.html',
  styleUrl: './veterinary-list.component.css'
})
export class VeterinaryListComponent implements OnInit{
  @Input() veterinaries: VeterinaryEntity[] = [];

  constructor(
    private veterinaryService: VeterinaryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllVeterinaries();
  }

  private getAllVeterinaries() {
    this.veterinaryService.getAll().subscribe((response: any) => {
      this.veterinaries = response;
      console.log(this.veterinaries);
    });
  }

  viewDetails(veterinary: VeterinaryEntity): void {
    this.router.navigate(['/veterinaries', veterinary.nameVet], { state: { veterinary } });
  }
}
