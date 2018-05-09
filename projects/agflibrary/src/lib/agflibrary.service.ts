import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AGFLibraryService {
  public readonly formGroup = new BehaviorSubject<FormGroup>(null);

  constructor() { }
}
