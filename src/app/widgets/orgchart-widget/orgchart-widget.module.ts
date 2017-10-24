import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { OrganizationChartModule } from './organizationchart/organizationchart';

const WIDGETS_MODULES = [
    OrganizationChartModule
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
export class OrgchartWidgetModule { }
