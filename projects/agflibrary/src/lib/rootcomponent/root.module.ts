import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RendererModule } from '../form/renderer/renderer.module';


const AngularImports = [
    CommonModule,
    ReactiveFormsModule
];

@NgModule({
    imports: [
        ...AngularImports,
        RendererModule
    ],
    exports: [RootComponent],
    declarations: [RootComponent],
    providers: [],
})
export class RootModule { }
