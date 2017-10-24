import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EchartsDescComponent } from './echarts-desc.component';
import { EchartsDemoComponent } from './echarts-demo/echarts-demo.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'desc', pathMatch: 'full' },
            {path: 'desc', component: EchartsDescComponent },
            {path: 'demo', component: EchartsDemoComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class EchartsDescRoutingModule {}
