import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EchartOptionDirective } from './echart-option.directive';

const WIDGETS = [
    EchartOptionDirective
];
@NgModule({
    declarations: [
        WIDGETS
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        WIDGETS
    ]
})
export class EchartWidgetsModule {
}
