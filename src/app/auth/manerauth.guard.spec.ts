import { TestBed } from '@angular/core/testing';

import { ManerauthGuard } from './manerauth.guard';

describe('ManerauthGuard', () => {
  let guard: ManerauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManerauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
