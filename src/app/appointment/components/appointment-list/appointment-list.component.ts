import {Component, Input} from '@angular/core';
import {AppointmentEntity} from "../../model/appointment-entity";
import {AppointmentService} from "../../services/appointment.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  @Input() appointments: AppointmentEntity[]=[];

  constructor( private appointmentService: AppointmentService) {}

  ngOnInit(){
    this.getAllAppointments();
  }

  private getAllAppointments() {
    this.appointmentService.getAll().subscribe((response: any) => {
      this.appointments = response;
      console.log(this.appointments);
    })
  }
}
