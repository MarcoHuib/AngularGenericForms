import { Component } from '@angular/core';
import { AGFLibraryService } from '../../projects/agflibrary/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private aGFLibraryService: AGFLibraryService) {

  }

}
