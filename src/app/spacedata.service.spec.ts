import { TestBed } from '@angular/core/testing';

import { SpacedataService } from './spacedata.service';

describe('SpacedataService', () => {
  let service: SpacedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
