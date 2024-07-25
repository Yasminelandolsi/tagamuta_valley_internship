import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnamComponent } from './cnam.component';

describe('CnamComponent', () => {
  let component: CnamComponent;
  let fixture: ComponentFixture<CnamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnamComponent]
    });
    fixture = TestBed.createComponent(CnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
