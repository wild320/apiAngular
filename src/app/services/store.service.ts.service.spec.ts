import { TestBed } from '@angular/core/testing';

import { Store.Service.TsService } from './store.service.ts.service';

describe('Store.Service.TsService', () => {
  let service: Store.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Store.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
