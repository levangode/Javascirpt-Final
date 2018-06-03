import { TestBed, async, inject } from '@angular/core/testing';

import { UniAuthGuardGuard } from './uni-auth-guard.guard';

describe('UniAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniAuthGuardGuard]
    });
  });

  it('should ...', inject([UniAuthGuardGuard], (guard: UniAuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
