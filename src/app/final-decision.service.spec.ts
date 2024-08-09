import { TestBed } from '@angular/core/testing';

import { FinalDecisionService } from './final-decision.service';

describe('FinalDecisionService', () => {
  let service: FinalDecisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalDecisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
