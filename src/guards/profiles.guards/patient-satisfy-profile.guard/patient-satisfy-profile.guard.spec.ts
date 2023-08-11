import { TestBed } from '@angular/core/testing';

import { PatientSatisfyProfileGuard } from './patient-satisfy-profile.guard';

describe('PatientSatisfyProfileGuard', () => {
  let guard: PatientSatisfyProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PatientSatisfyProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
