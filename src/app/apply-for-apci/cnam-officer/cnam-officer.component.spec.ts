import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnamOfficerComponent } from './cnam-officer.component';

describe('CnamOfficerComponent', () => {
  let component: CnamOfficerComponent;
  let fixture: ComponentFixture<CnamOfficerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnamOfficerComponent]
    });
    fixture = TestBed.createComponent(CnamOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
