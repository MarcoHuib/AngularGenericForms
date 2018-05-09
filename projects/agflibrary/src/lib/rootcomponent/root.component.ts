import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AGFLibraryService } from '../agflibrary.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'agf-generator',
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.scss']
})

export class RootComponent implements OnInit {
    public formGroup: FormGroup;

    constructor(private aGFLibraryService: AGFLibraryService) {
    }

    ngOnInit() { }
}
