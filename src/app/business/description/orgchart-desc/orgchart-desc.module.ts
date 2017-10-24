import { OrgchartDescRoutingModule } from './orgchart-desc-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgchartDescComponent } from './orgchart-desc.component';

@NgModule({
  imports: [
    CommonModule,
    OrgchartDescRoutingModule
  ],
  declarations: [OrgchartDescComponent]
})
export class OrgchartDescModule { }
