import { DatalistDescComponent } from './datalist-desc.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'datalist', pathMatch: 'full'},
            {path: 'datalist', component: DatalistDescComponent},
            {path: '**', redirectTo: 'datalist'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DatalistDescRoutingModule { }
