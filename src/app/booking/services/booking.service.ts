import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base-service.service";
import {BookingEntity} from "../model/booking-entity";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService extends BaseService<BookingEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/bookings';
  }

  createBooking(booking: BookingEntity): Observable<BookingEntity> {
    return this.create(booking);
  }
}
