import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsDescComponent } from './charts-desc.component';
import { BarComponent } from './bar';
import { LineComponent } from './line';
import { PieComponent } from './pie';
import { DoughnutComponent } from './doughnut';
import { RadarComponent } from './radar';
import { PolarAreaComponent } from './polar-area';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'desc', pathMatch: 'full' },
            {path: 'desc', component: ChartsDescComponent },
            {path: 'bar', component: BarComponent },
            {path: 'line', component: LineComponent },
            {path: 'pie', component: PieComponent },
            {path: 'doughnut', component: DoughnutComponent },
            {path: 'radar', component: RadarComponent },
            {path: 'polar-area', component: PolarAreaComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ChartsDescRoutingModule {}
