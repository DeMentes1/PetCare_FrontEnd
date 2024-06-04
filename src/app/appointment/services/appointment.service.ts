import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base-service.service";
import {AppointmentVetEntity} from "../../vet-appoinment/model/appointment-vet-entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends BaseService<AppointmentVetEntity>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/bookings';
  }
}
