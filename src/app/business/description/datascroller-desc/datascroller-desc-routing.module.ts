import { DatascrollerDescComponent } from './datascroller-desc.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'datascroller', pathMatch: 'full'},
            {path: 'datascroller', component: DatascrollerDescComponent},
            {path: '**', redirectTo: 'datascroller'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DatascrollerDescRoutingModule { }
