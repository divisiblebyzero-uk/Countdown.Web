import { TestBed } from '@angular/core/testing';

import { NumbersGameService } from './numbers-game.service';

describe('NumbersGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumbersGameService = TestBed.get(NumbersGameService);
    expect(service).toBeTruthy();
  });
});
