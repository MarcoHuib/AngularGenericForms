import { TestBed, inject } from '@angular/core/testing';

import { AGFLibraryService } from './agflibrary.service';

describe('AGFLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AGFLibraryService]
    });
  });

  it('should be created', inject([AGFLibraryService], (service: AGFLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
