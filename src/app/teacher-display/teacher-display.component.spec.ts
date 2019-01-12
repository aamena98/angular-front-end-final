import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDisplayComponent } from './teacher-display.component';

describe('TeacherDisplayComponent', () => {
  let component: TeacherDisplayComponent;
  let fixture: ComponentFixture<TeacherDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
