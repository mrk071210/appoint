import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighLightModule } from '../code-high-light';
import { DataTableModule } from 'primeng/primeng';
import { CommonWidgetsModule, ChartsWidgetsModule} from '../../../widgets';
import { ChartsDescRoutingModule } from './charts-desc-routing.module';
import { ChartsDescComponent } from './charts-desc.component';
import { BarComponent } from './bar';
import { LineComponent } from './line';
import { PieComponent } from './pie';
import { DoughnutComponent } from './doughnut';
import { RadarComponent } from './radar';
import { PolarAreaComponent } from './polar-area';

@NgModule({
  imports: [
    CommonModule,
    CodeHighLightModule,
    DataTableModule,
    CommonWidgetsModule,
    ChartsWidgetsModule,
    ChartsDescRoutingModule
  ],
  declarations: [
    ChartsDescComponent,
    BarComponent,
    LineComponent,
    PieComponent,
    DoughnutComponent,
    RadarComponent,
    PolarAreaComponent
  ]
})
export class ChartsDescModule { }
