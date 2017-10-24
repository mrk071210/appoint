import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighLightModule } from '../code-high-light';
import { CommonWidgetsModule, DatatableWidgetModule, FormWidgetsModule} from '../../../widgets';

import { DatatableDescComponent } from './datatable-desc.component';
import { DatatableDescRoutingModule } from './datatable-desc-routing.module';

import { GetDummyDataService } from './get-dummy-data-service';
import {
  BasicComponent,
  TemplatingComponent,
  ColGroupComponent,
  RowGroupComponent,
  PaginatorComponent,
  SortComponent,
  FilterComponent,
  FacetsComponent,
  EditableComponent,
  ResizeComponent,
  LazyLoadComponent,
  CrudComponent,
  ExportComponent,
  SelectionComponent
 } from '../datatable-desc';

@NgModule({
  imports: [
    CommonModule,
    CodeHighLightModule,
    CommonWidgetsModule,
    DatatableWidgetModule,
    FormWidgetsModule,
    DatatableDescRoutingModule
  ],
  declarations: [
    DatatableDescComponent,
    BasicComponent,
    TemplatingComponent,
    ColGroupComponent,
    RowGroupComponent,
    PaginatorComponent,
    SortComponent,
    FilterComponent,
    FacetsComponent,
    EditableComponent,
    ResizeComponent,
    LazyLoadComponent,
    CrudComponent,
    ExportComponent,
    SelectionComponent
  ],
  providers: [GetDummyDataService]
})
export class DatatableDescModule { }
