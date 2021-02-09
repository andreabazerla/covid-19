import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CinaService } from './cina.service';

describe('CinaService', () => {
  let service: CinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
