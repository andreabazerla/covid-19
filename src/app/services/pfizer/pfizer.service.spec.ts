import { TestBed } from '@angular/core/testing';
import { PfizerService } from './pfizer.service';

describe('PfizerService', () => {
  let service: PfizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
