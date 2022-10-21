import { TestBed } from '@angular/core/testing';

import { ValueColumnSortService } from './value-column-sort.service';

describe('ValueColumnSortService', () => {
  let service: ValueColumnSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueColumnSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
