import { TestBed } from '@angular/core/testing';

import { StoreService} from './store.service';

describe('Store.Service.TsService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
