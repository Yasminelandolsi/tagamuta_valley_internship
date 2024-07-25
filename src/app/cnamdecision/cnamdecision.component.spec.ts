import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnamdecisionComponent } from './cnamdecision.component';

describe('CnamdecisionComponent', () => {
  let component: CnamdecisionComponent;
  let fixture: ComponentFixture<CnamdecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnamdecisionComponent]
    });
    fixture = TestBed.createComponent(CnamdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
