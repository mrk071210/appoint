import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule, DialogModule, TabViewModule, PanelModule, SpinnerModule,
DataTableModule,SharedModule, PanelMenuModule,MenuItem, InputTextModule, CalendarModule,
DropdownModule, InputMaskModule, InputTextareaModule, CheckboxModule, RadioButtonModule,
AutoCompleteModule,ListboxModule, SliderModule,InputSwitchModule, FileUploadModule, GrowlModule,
ChartModule,TreeModule,TreeNode, TooltipModule, SelectButtonModule} from 'primeng/primeng';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleDashboardComponent } from './example-dashboard';
import { ExampleFormComponent } from './example-form';
import { ExampleLayoutComponent } from './example-layout';
import { DemoDataService } from './data';

const PRIMENG_MODULES = [
    TabViewModule, // 标签面板
    PanelModule, // 可折叠面板
    SpinnerModule, // 数字输入框
    DialogModule, // 弹出框
    ButtonModule, // 按钮
    DataTableModule,SharedModule, // 表格
    PanelMenuModule, // 菜单
    InputTextModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    InputTextareaModule,
    AutoCompleteModule,
    CheckboxModule,
    RadioButtonModule,
    ListboxModule,
    SliderModule,
    InputSwitchModule,
    FileUploadModule,
    GrowlModule,
    ChartModule,
    TreeModule,
    TooltipModule,
    SelectButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExampleRoutingModule,
    PRIMENG_MODULES
  ],
  declarations: [
    ExampleDashboardComponent,
    ExampleFormComponent,
    ExampleLayoutComponent
  ],
  providers: [DemoDataService]
})
export class ExampleModule { }
