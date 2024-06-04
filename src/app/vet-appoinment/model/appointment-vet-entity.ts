export class AppointmentVetEntity {
  fechaReserva: string;
  nombreDueno: string;
  motivoCita: string;
  tipoServicio: string;
  telefono: Number;
  detallesAdicionales: string

  constructor() {
    this.fechaReserva='';
    this.nombreDueno='';
    this.motivoCita='';
    this.tipoServicio='';
    this.telefono=0;
    this.detallesAdicionales = '';
  }
}
