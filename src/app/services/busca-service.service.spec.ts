import { TestBed } from '@angular/core/testing';

import { BuscaServiceService } from './busca-service.service';

describe('BuscaServiceService', () => {
  let service: BuscaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
