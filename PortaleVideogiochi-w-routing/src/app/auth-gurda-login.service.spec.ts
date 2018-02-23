import { TestBed, inject } from '@angular/core/testing';

import { AuthGurdaLoginService } from './auth-gurda-login.service';

describe('AuthGurdaLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGurdaLoginService]
    });
  });

  it('should be created', inject([AuthGurdaLoginService], (service: AuthGurdaLoginService) => {
    expect(service).toBeTruthy();
  }));
});
