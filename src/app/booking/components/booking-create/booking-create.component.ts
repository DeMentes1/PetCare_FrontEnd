import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrl: './booking-create.component.css'
})
export class BookingCreateComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    console.log(this.bookingForm.value);
  }
}
