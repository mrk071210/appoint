import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TreeDescComponent } from './tree-desc.component';
import { BasicComponent } from './basic';
import { SingleComponent } from './single';
import { MultipleComponent } from './multiple';
import { CheckboxComponent } from './checkbox';
import { ContextComponent } from './context';
import { ExpansionComponent } from './expansion';

@NgModule({
   imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'tree', pathMatch: 'full'},
            {path: 'tree', component: TreeDescComponent},
            {path: 'basic', component: BasicComponent},
            {path: 'single', component: SingleComponent},
            {path: 'multiple', component: MultipleComponent},
            {path: 'checkbox', component: CheckboxComponent},
            {path: 'context', component: ContextComponent},
            {path: 'expansion', component: ExpansionComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TreeDescRoutingModule { }
