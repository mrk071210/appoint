import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DataScrollerModule } from './datascroller/datascroller';

const WIDGETS_MODULES = [
    DataScrollerModule
]

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
export class DatascrollerWidgetModule { }
