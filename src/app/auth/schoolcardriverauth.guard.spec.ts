import { TestBed } from '@angular/core/testing';

import { SchoolcardriverauthGuard } from './schoolcardriverauth.guard';

describe('SchoolcardriverauthGuard', () => {
  let guard: SchoolcardriverauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SchoolcardriverauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
