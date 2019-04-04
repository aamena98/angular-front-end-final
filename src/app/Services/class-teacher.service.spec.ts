import { TestBed } from '@angular/core/testing';

import { ClassTeacherService } from './class-teacher.service';

describe('ClassTeacherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassTeacherService = TestBed.get(ClassTeacherService);
    expect(service).toBeTruthy();
  });
});
