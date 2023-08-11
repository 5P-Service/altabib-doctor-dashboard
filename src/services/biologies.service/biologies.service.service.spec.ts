import { TestBed } from '@angular/core/testing';

import { BiologiesServiceService } from './biologies.service.service';

describe('BiologiesServiceService', () => {
  let service: BiologiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiologiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
