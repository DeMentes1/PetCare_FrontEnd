import { TestBed } from '@angular/core/testing';

import { AppointmentVetService } from './appointment-vet.service';

describe('AppointmentVetService', () => {
  let service: AppointmentVetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentVetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
