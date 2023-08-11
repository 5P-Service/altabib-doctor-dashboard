import { TestBed } from '@angular/core/testing';

import { RadiologiesServiceService } from './radiologies.service.service';

describe('RadiologiesServiceService', () => {
  let service: RadiologiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadiologiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
