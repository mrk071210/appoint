import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentCriterionRoutingModule } from './development-criterion-routing.module';
import { DevelopmentCriterionComponent } from './development-criterion.component';
import { CodeHighLightModule } from '../code-high-light';
import { DatatableWidgetModule } from '../../../widgets';


@NgModule({
  imports: [
    CommonModule,
    CodeHighLightModule,
    DevelopmentCriterionRoutingModule,
    DatatableWidgetModule
  ],
  declarations: [DevelopmentCriterionComponent]
})
export class DevelopmentCriterionModule { }
