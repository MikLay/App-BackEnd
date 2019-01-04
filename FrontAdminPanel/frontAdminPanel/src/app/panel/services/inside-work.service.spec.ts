import { TestBed } from '@angular/core/testing';

import { InsideWorkService } from './inside-work.service';

describe('InsideWorkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsideWorkService = TestBed.get(InsideWorkService);
    expect(service).toBeTruthy();
  });
});
