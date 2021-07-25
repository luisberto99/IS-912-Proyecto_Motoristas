import { TestBed } from '@angular/core/testing';

import { ServiceSharedService } from './service-shared.service';

describe('ServiceSharedService', () => {
  let service: ServiceSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
