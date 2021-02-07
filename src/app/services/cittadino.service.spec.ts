import { TestBed } from '@angular/core/testing';

import { CittadinoService } from './cittadino.service';

describe('CittadinoService', () => {
  let service: CittadinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CittadinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
