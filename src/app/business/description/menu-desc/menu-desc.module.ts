import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeHighLightModule } from '../code-high-light';
import { DataTableModule } from 'primeng/primeng';

import { CommonWidgetsModule, MenuWidgetsModule } from '../../../widgets';
import { MenuDescRoutingModule } from './menu-desc-routing.module';

import { MenuDescComponent } from './menu-desc.component';
import { BreadcrumbComponent } from './breadcrumb';
import { MegamenuComponent } from './megamenu';
import { TabmenuComponent } from './tabmenu';
import { TieredmenuComponent } from './tieredmenu';

@NgModule({
  imports: [
    CommonModule,
    CodeHighLightModule,
    DataTableModule,
    CommonWidgetsModule,
    MenuWidgetsModule,
    MenuDescRoutingModule
  ],
  declarations: [
    MenuDescComponent,
    BreadcrumbComponent,
    MegamenuComponent,
    TabmenuComponent,
    TieredmenuComponent
  ]
})
export class MenuDescModule { }
