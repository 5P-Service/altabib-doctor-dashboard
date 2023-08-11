import { TestBed } from '@angular/core/testing';

import { UnauthentificatedGuard } from './unauthentificated.guard';

describe('UnauthentificatedGuard', () => {
  let guard: UnauthentificatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnauthentificatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
