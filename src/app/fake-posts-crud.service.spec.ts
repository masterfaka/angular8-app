import { TestBed } from '@angular/core/testing';

import { FakePostsCrudService } from './fake-posts-crud.service';

describe('FakePostsCrudService', () => {
  let service: FakePostsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakePostsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
