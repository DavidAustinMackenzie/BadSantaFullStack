import { TestBed } from '@angular/core/testing';

import { BadsantaService } from './badsanta.service';

describe('BadsantaService', () => {
  let service: BadsantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadsantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
