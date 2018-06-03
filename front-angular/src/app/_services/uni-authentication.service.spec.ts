import { TestBed, inject } from '@angular/core/testing';

import { UniAuthenticationService } from './uni-authentication.service';

describe('UniAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniAuthenticationService]
    });
  });

  it('should be created', inject([UniAuthenticationService], (service: UniAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
