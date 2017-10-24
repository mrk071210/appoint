import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonDescComponent } from './common-desc.component';
import { AccordionComponent } from './accordion';
import { ButtonComponent} from './button';
import { DialogComponent } from './dialog';
import { GrowlComponent } from './growl';
import { MessagesComponent } from './messages';
import { PanelComponent } from './panel';
import { ProgressBarComponent } from './progress-bar';
import { SplitButtonComponent } from './split-button';
import { TabViewComponent } from './tab-view';
import { TooltipComponent } from './tooltip';
import { ConfirmDialogComponent } from './confirm-dialog';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'desc', pathMatch: 'full'},
            {path: 'desc', component: CommonDescComponent},
            {path: 'accordion', component: AccordionComponent},
            {path: 'button', component: ButtonComponent},
            {path: 'dialog', component: DialogComponent},
            {path: 'growl', component: GrowlComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'panel', component: PanelComponent},
            {path: 'progress-bar', component: ProgressBarComponent},
            {path: 'split-button', component: SplitButtonComponent},
            {path: 'tab-view', component: TabViewComponent},
            {path: 'tooltip', component: TooltipComponent},
            {path: 'confirm-dialog', component: ConfirmDialogComponent},
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CommonDescRoutingModule {}
