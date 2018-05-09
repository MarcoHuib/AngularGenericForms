import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGenericFormsLibraryComponent } from './angular-generic-forms-library.component';

describe('AngularGenericFormsLibraryComponent', () => {
  let component: AngularGenericFormsLibraryComponent;
  let fixture: ComponentFixture<AngularGenericFormsLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularGenericFormsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGenericFormsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
