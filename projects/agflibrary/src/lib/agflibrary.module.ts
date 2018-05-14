import { NgModule } from '@angular/core';
import { RootModule } from './rootcomponent/root.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RootModule
  ],
  declarations: [],
  exports: [RootModule]
})
export class AGFLibraryModule { }
