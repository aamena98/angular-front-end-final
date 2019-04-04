import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamResultComponent } from './new-exam-result.component';

describe('NewExamResultComponent', () => {
  let component: NewExamResultComponent;
  let fixture: ComponentFixture<NewExamResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExamResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
