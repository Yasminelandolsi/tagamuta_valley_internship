import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDecisionListComponent } from './final-decision-list.component';

describe('FinalDecisionListComponent', () => {
  let component: FinalDecisionListComponent;
  let fixture: ComponentFixture<FinalDecisionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalDecisionListComponent]
    });
    fixture = TestBed.createComponent(FinalDecisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
