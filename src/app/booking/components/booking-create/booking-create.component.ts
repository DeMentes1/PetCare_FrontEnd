import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {provideNativeDateAdapter} from "@angular/material/core";
import {BookingEntity} from "../../model/booking-entity";
import {BookingService} from "../../services/booking.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-booking-create',
  providers: [provideNativeDateAdapter()],
  templateUrl: './booking-create.component.html',
  styleUrl: './booking-create.component.css'
})
export class BookingCreateComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private bookingService: BookingService, private snackBar: MatSnackBar) {
    this.bookingForm = this.fb.group({
      fechaReserva: [''],
      nombreDueno: [''],
      motivoCita: [''],
      tipoServicio: [''],
      telefono: [''],
      detallesAdicionales: ['']
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const booking: BookingEntity = this.bookingForm.value;
      booking.fechaReserva = formatDate(booking.fechaReserva, 'dd/MM/yyyy', 'en-US');
      this.bookingService.createBooking(booking).subscribe(
        response => {
          console.log('Reserva creada:', response);
          this.snackBar.open('Cita reservada con éxito', 'Cerrar', {
            duration: 3000,
          });
        },
        error => {
          console.error('Error al crear la reserva:', error);
          this.snackBar.open('Error al reservar la cita', 'Cerrar', {
            duration: 3000,
          });
        }
      );
    }
  }
}
