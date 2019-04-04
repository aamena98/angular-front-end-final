import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentAttendanceComponent } from './new-student-attendance.component';

describe('NewStudentAttendanceComponent', () => {
  let component: NewStudentAttendanceComponent;
  let fixture: ComponentFixture<NewStudentAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStudentAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
