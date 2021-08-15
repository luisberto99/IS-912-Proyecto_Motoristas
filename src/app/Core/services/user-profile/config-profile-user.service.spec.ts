import { TestBed } from '@angular/core/testing';

import { ConfigProfileUserService } from './config-profile-user.service';

describe('ConfigProfileUserService', () => {
  let service: ConfigProfileUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigProfileUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
