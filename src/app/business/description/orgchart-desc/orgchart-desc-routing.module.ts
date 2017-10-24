import { OrgchartDescComponent } from './orgchart-desc.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
   imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'orgchart', pathMatch: 'full'},
            {path: 'orgchart', component: OrgchartDescComponent},
            {path: '**', redirectTo: 'orgchart'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class OrgchartDescRoutingModule { }
