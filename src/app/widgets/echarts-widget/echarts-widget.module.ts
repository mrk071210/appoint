import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EchartsOptionDirective } from './echarts-option.directive';

const WIDGETS = [
    EchartsOptionDirective
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
export class EchartsWidgetModule {
}
