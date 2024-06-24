import { TestBed } from '@angular/core/testing';

import { AuthenticationInterceptor } from './authentication.interceptor';

describe('AuthenticationInterceptorService', () => {
  let service: AuthenticationInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
