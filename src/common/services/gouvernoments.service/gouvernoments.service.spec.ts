import { TestBed } from '@angular/core/testing';

import { GouvernomentsService } from './gouvernoments.service';

describe('GouvernomentsService', () => {
  let service: GouvernomentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GouvernomentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
