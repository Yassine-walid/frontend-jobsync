import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsFormComponent } from './announcements-form.component';

describe('AnnouncementsFormComponent', () => {
  let component: AnnouncementsFormComponent;
  let fixture: ComponentFixture<AnnouncementsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsFormComponent]
    });
    fixture = TestBed.createComponent(AnnouncementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
