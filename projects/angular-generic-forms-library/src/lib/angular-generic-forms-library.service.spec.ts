import { TestBed, inject } from '@angular/core/testing';

import { AngularGenericFormsLibraryService } from './angular-generic-forms-library.service';

describe('AngularGenericFormsLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularGenericFormsLibraryService]
    });
  });

  it('should be created', inject([AngularGenericFormsLibraryService], (service: AngularGenericFormsLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
