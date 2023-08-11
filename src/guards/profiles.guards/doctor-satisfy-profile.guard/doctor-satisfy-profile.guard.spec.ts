import { TestBed } from '@angular/core/testing';

import { DoctorSatisfyProfileGuard } from './doctor-satisfy-profile.guard';

describe('DoctorSatisfyProfileGuard', () => {
  let guard: DoctorSatisfyProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DoctorSatisfyProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
