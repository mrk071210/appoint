import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/primeng';

const WIDGETS_MODULES = [
    ChartModule
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WIDGETS_MODULES
    ],
    exports: [
        WIDGETS_MODULES
    ]
})
export class ChartsWidgetsModule { }
