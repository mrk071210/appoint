import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DevelopmentCriterionComponent } from './development-criterion.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: DevelopmentCriterionComponent },
      { path: '**', redirectTo: 'index' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DevelopmentCriterionRoutingModule { }
