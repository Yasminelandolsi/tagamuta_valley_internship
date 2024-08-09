import { TestBed } from '@angular/core/testing';

import { ApciformService } from './apciform.service';

describe('ApciformService', () => {
  let service: ApciformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApciformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
