import { TestBed } from '@angular/core/testing';

import { SearchCharacterService } from './search-character.service';

describe('SearchCharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCharacterService = TestBed.get(SearchCharacterService);
    expect(service).toBeTruthy();
  });
});
