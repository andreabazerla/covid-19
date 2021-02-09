import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PfizerService } from './pfizer.service';

describe('PfizerService', () => {
  let service: PfizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PfizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
