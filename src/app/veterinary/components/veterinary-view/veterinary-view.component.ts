import {Component, OnInit} from '@angular/core';
import {VeterinaryEntity} from "../../model/veterinary-entity";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-veterinary-view',
  templateUrl: './veterinary-view.component.html',
  styleUrl: './veterinary-view.component.css'
})
export class VeterinaryViewComponent implements OnInit{

  veterinary: VeterinaryEntity = new VeterinaryEntity();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.veterinary = history.state.veterinary;
  }
}
