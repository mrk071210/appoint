import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    WidgetsModule
} from '../../widgets';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleDashboardComponent } from './example-dashboard';
import { ExampleFormComponent } from './example-form';
import { ExampleLayoutComponent } from './example-layout';
import { DemoDataService } from './data';

const PRIMENG_MODULES = [
  WidgetsModule
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
