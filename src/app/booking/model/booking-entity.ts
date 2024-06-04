export class BookingEntity {
  fechaReserva: string;
  nombreDueno: string;
  motivoCita: string;
  tipoServicio: string;
  telefono: string;
  detallesAdicionales: string;

  constructor() {
    this.fechaReserva = '';
    this.nombreDueno = '';
    this.motivoCita = '';
    this.tipoServicio = '';
    this.telefono = '';
    this.detallesAdicionales = '';
  }
}
