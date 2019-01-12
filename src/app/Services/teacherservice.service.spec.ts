import { TestBed } from '@angular/core/testing';

import { TeacherserviceService } from './teacherservice.service';

describe('TeacherserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherserviceService = TestBed.get(TeacherserviceService);
    expect(service).toBeTruthy();
  });
});
