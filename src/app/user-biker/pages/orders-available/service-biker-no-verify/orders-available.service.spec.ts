import { TestBed } from '@angular/core/testing';

import { OrdersAvailableService } from './orders-available.service';

describe('OrdersAvailableService', () => {
  let service: OrdersAvailableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersAvailableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
