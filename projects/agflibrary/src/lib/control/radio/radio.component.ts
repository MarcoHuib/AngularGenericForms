import { Component, OnInit } from '@angular/core';
import { ControlComponent } from '../controlcomponent/controlcomponent.component';

@Component({
  selector: 'agf-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent extends ControlComponent implements OnInit {
  ngOnInit(): void {

  }
}
