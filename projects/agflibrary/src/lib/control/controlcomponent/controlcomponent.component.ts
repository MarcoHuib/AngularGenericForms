import { Component, OnInit, OnChanges, Input, SimpleChanges, ChangeDetectorRef, Injectable } from '@angular/core';
import { FormArray, FormGroup, FormControl, AbstractControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import { IControl } from '../../types';
import { Observable } from 'rxjs/internal/Observable';
import { Random } from '../../tools';

export abstract class ControlComponent implements OnInit, OnChanges {
  public randomNumber: number;

  constructor() {
    this.randomNumber = Random.number;
  }

  @Input() formGroup: FormGroup;
  @Input() control: IControl;


  get getControl() {
    return this.formGroup.controls[this.control.controlName];
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['control'].firstChange) {
      if (this.formGroup.controls.hasOwnProperty(this.control.controlName)) {
        throw new Error('ControlName already exists.');
      }

      this.formGroup.addControl(this.control.controlName, new FormControl(
        {
          value: this.control.value,
          disabled: this.control.disabled
        }, {
          validators: this.control.validators,
          asyncValidators: this.control.asyncValidators,
          updateOn: this.control.updateOn,
        }));
    }
  }

}
