import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTeacherDisplayComponent } from './class-teacher-display.component';

describe('ClassTeacherDisplayComponent', () => {
  let component: ClassTeacherDisplayComponent;
  let fixture: ComponentFixture<ClassTeacherDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTeacherDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTeacherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
