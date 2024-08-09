import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApciinfoComponent } from './apciinfo.component';

describe('ApciinfoComponent', () => {
  let component: ApciinfoComponent;
  let fixture: ComponentFixture<ApciinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApciinfoComponent]
    });
    fixture = TestBed.createComponent(ApciinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
