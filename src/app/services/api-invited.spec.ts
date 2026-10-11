import { TestBed } from '@angular/core/testing';

import { ApiInvited } from './api-invited';

describe('ApiInvited', () => {
  let service: ApiInvited;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInvited);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
