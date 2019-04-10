import { TestBed } from '@angular/core/testing';

import { SearchPlanetService } from './search-planet.service';

describe('SearchPlanetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPlanetService = TestBed.get(SearchPlanetService);
    expect(service).toBeTruthy();
  });
});
