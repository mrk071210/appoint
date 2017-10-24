import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeHighLightModule } from '../code-high-light';

import { CommonWidgetsModule, TreeWidgetModule, DatatableWidgetModule } from '../../../widgets';
import { TreeDescRoutingModule } from './tree-desc-routing.module';

import { TreeDescComponent } from './tree-desc.component';
import { BasicComponent } from './basic';
import { SingleComponent } from './single';
import { MultipleComponent } from './multiple';
import { CheckboxComponent } from './checkbox';
import { ContextComponent } from './context';
import { ExpansionComponent } from './expansion';
import { DropdownComponent } from './dropdown';

@NgModule({
  imports: [
    CommonModule,
    CodeHighLightModule,
    DatatableWidgetModule,
    CommonWidgetsModule,
    TreeWidgetModule,
    TreeDescRoutingModule
  ],
  declarations: [
    TreeDescComponent,
    BasicComponent,
    SingleComponent,
    MultipleComponent,
    CheckboxComponent,
    ContextComponent,
    ExpansionComponent,
    DropdownComponent
    ]
})
export class TreeDescModule { }
