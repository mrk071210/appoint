import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EchartWidgetsModule } from './echart-widgets';
import { ChartsWidgetsModule } from './charts-widgets';
import { CommonWidgetsModule } from './common-widgets';
import { DatalistWidgetModule } from './datalist-widget';
import { DatascrollerWidgetModule } from './datascroller-widget';
import { DatatableWidgetModule } from './datatable-widget';
import { FormWidgetsModule } from './form-widgets';
import { MenuWidgetsModule } from './menu-widgets';
import { OrgchartWidgetModule } from './orgchart-widget';
import { TreeWidgetModule } from './tree-widget';

const WIDGETS_MODULES = [
    EchartWidgetsModule,
    ChartsWidgetsModule,
    CommonWidgetsModule,
    DatalistWidgetModule,
    DatascrollerWidgetModule,
    DatatableWidgetModule,
    FormWidgetsModule,
    MenuWidgetsModule,
    OrgchartWidgetModule,
    TreeWidgetModule
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
export class WidgetsModule {
}
