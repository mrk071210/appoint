import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighLightModule } from '../code-high-light';
import { CommonWidgetsModule, DatatableWidgetModule, FormWidgetsModule} from '../../../widgets';

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
  SelectionComponent,
  ScrollComponent
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
    SelectionComponent,
    ScrollComponent
  ],
  providers: [GetDummyDataService]
})
export class DatatableDescModule { }
