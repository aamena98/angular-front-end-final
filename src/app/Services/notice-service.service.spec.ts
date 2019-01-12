import { TestBed } from '@angular/core/testing';

import { NoticeServiceService } from './notice-service.service';

describe('NoticeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticeServiceService = TestBed.get(NoticeServiceService);
    expect(service).toBeTruthy();
  });
});
