import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EchartsWidgetModule } from './echarts-widget';
import { ChartsWidgetModule } from './charts-widget';
import { CommonWidgetsModule } from './common-widgets';
import { DatalistWidgetModule } from './datalist-widget';
import { DatascrollerWidgetModule } from './datascroller-widget';
import { DatatableWidgetModule } from './datatable-widget';
import { FormWidgetsModule } from './form-widgets';
import { MenuWidgetsModule } from './menu-widgets';
import { OrgchartWidgetModule } from './orgchart-widget';
import { TreeWidgetModule } from './tree-widget';

const WIDGETS_MODULES = [
    EchartsWidgetModule,
    ChartsWidgetModule,
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
