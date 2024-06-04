import {Component, Input} from '@angular/core';
import {AppointmentVetEntity} from "../../model/appointment-vet-entity";
import {HttpClient} from "@angular/common/http";
import {AppointmentVetService} from "../../services/appointment-vet.service";

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrl: './appointment-view.component.css'
})
export class AppointmentViewComponent {
  @Input() appointmentvet: AppointmentVetEntity[]=[];

  constructor( private appointmentVetService: AppointmentVetService) {}

  ngOnInit(){
    this.getAllAppointments();
  }

  private getAllAppointments() {
    this.appointmentVetService.getAll().subscribe((response: any) => {
      this.appointmentvet = response;
      console.log(this.appointmentvet);
    })
  }
}
