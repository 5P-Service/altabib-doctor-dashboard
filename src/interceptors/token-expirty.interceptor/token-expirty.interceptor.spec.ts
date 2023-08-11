import { TestBed } from '@angular/core/testing';

import { TokenExpirtyInterceptor } from './token-expirty.interceptor';

describe('TokenExpirtyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenExpirtyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenExpirtyInterceptor = TestBed.inject(TokenExpirtyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
