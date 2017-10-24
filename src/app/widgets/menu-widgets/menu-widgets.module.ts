import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
    MenuModule,
    BreadcrumbModule,
    MegaMenuModule,
    TabMenuModule,
    TieredMenuModule
} from 'primeng/primeng';

const WIDGETS_MODULES = [
    MenuModule,
    BreadcrumbModule,
    MegaMenuModule,
    TabMenuModule,
    TieredMenuModule
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
export class MenuWidgetsModule { }
