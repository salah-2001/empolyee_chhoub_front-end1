import { TestBed } from '@angular/core/testing';

import { AjouterserviceService } from './ajouterservice.service';

describe('AjouterserviceService', () => {
  let service: AjouterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
