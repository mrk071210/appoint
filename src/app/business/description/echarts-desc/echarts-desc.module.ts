import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeHighLightModule } from '../code-high-light';
import {
    CommonWidgetsModule,
    EchartWidgetsModule,
    DatatableWidgetModule
} from '../../../widgets';

import { EchartsDescRoutingModule } from './echarts-desc-routing.module';

import { EchartsDescComponent } from './echarts-desc.component';
import { EchartsDemoComponent } from './echarts-demo/echarts-demo.component';

@NgModule({
    imports: [
        CommonModule,
        CommonWidgetsModule,
        EchartWidgetsModule,
        DatatableWidgetModule,
        CodeHighLightModule,
        EchartsDescRoutingModule
    ],
    declarations: [EchartsDescComponent, EchartsDemoComponent]
})
export class EchartsDescModule { }
