import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseProfileComponent } from './enterprise-profile.component';

describe('EnterpriseProfileComponent', () => {
  let component: EnterpriseProfileComponent;
  let fixture: ComponentFixture<EnterpriseProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseProfileComponent]
    });
    fixture = TestBed.createComponent(EnterpriseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
