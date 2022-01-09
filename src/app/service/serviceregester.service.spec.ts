import { TestBed } from '@angular/core/testing';

import { ServiceregesterService } from './serviceregester.service';

describe('ServiceregesterService', () => {
  let service: ServiceregesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceregesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
