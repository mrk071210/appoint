import { DatalistDescRoutingModule } from './datalist-desc-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatalistDescComponent } from './datalist-desc.component';

@NgModule({
  imports: [
    CommonModule,
    DatalistDescRoutingModule
  ],
  declarations: [DatalistDescComponent]
})
export class DatalistDescModule { }
