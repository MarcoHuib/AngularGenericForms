import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AGFLibraryModule } from '../../projects/agflibrary/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AGFLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
