import { Component, OnInit, Input } from '@angular/core';
import { IControl } from '../../types';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'agf-form-switch',
  templateUrl: './formswitch.component.html',
  styleUrls: ['./formswitch.component.css']
})
export class FormSwitchComponent implements OnInit {

  @Input() control: IControl;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
