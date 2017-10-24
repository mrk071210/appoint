import { DatascrollerDescRoutingModule } from './datascroller-desc-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatascrollerDescComponent } from './datascroller-desc.component';

@NgModule({
  imports: [
    CommonModule,
    DatascrollerDescRoutingModule
  ],
  declarations: [DatascrollerDescComponent]
})
export class DatascrollerDescModule { }
