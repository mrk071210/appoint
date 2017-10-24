import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
    DataTableModule,
    SharedModule
} from 'primeng/primeng';

const WIDGETS_MODULES = [
    DataTableModule,
    SharedModule
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
export class DatatableWidgetModule { }
