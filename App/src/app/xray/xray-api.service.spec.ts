import { TestBed } from '@angular/core/testing';

import { XrayApiService } from './xray-api.service';

describe('XrayApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XrayApiService = TestBed.get(XrayApiService);
    expect(service).toBeTruthy();
  });
});
