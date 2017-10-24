import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MenuModule } from './menu/menu';
import { BreadcrumbModule } from './breadcrumb/breadcrumb';
import { MegaMenuModule } from './megamenu/megamenu';
import { TabMenuModule } from './tabmenu/tabmenu';
import { TieredMenuModule } from './tieredmenu/tieredmenu';

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
