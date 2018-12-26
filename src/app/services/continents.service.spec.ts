import { TestBed, inject } from '@angular/core/testing';

import { ContinentsService } from './continents.service';

describe('ContinentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContinentsService]
    });
  });

  it('should be created', inject([ContinentsService], (service: ContinentsService) => {
    expect(service).toBeTruthy();
  }));
});
