import { TestBed } from '@angular/core/testing';

import { CnamDecisionService } from './cnam-decision.service';

describe('CnamDecisionService', () => {
  let service: CnamDecisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnamDecisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
