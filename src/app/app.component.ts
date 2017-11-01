import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss',
        './styles/common.scss'
        ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor() { }
}
