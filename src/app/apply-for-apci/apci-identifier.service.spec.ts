import { TestBed } from '@angular/core/testing';

import { ApciIdentifierService } from '../apply-for-apci/apci-identifier.service';

describe('ApciIdentifierService', () => {
  let service: ApciIdentifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApciIdentifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); 
