import { TestBed } from '@angular/core/testing';

import { ConteService } from './conte.service';

describe('ConteService', () => {
  let service: ConteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
