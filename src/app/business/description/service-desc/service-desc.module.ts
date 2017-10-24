import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonWidgetsModule, DatatableWidgetModule } from '../../../widgets';
import { CodeHighLightModule } from '../code-high-light';
import { ServiceDescRoutingModule } from './service-desc-routing.module';

import { ServiceDescComponent } from './service-desc.component';
import { HttpComponent } from './http';
import { RouterComponent } from './router';
import { CacheComponent } from './cache';
import { KyeeutilComponent } from './kyeeutil';

@NgModule({
    imports: [
        CommonModule,
        CodeHighLightModule,
        CommonWidgetsModule,
        DatatableWidgetModule,
        ServiceDescRoutingModule
    ],
    declarations: [
        ServiceDescComponent,
        HttpComponent,
        RouterComponent,
        CacheComponent,
        KyeeutilComponent
    ]
})
export class ServiceDescModule { }
