import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassTeacherComponent } from './edit-class-teacher.component';

describe('EditClassTeacherComponent', () => {
  let component: EditClassTeacherComponent;
  let fixture: ComponentFixture<EditClassTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
