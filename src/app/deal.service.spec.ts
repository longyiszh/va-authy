import { TestBed, inject } from '@angular/core/testing';

import { DealService } from './deal.service';

describe('DealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealService]
    });
  });

  it('should ...', inject([DealService], (service: DealService) => {
    expect(service).toBeTruthy();
  }));
});
