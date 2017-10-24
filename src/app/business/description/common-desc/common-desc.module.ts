import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeHighLightModule } from '../code-high-light';

import { CommonWidgetsModule, DatatableWidgetModule } from '../../../widgets';
import { CommonDescRoutingModule } from './common-desc-routing.module';

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

@NgModule({
    imports: [
        CommonModule,
        CommonWidgetsModule,
        DatatableWidgetModule,
        CommonDescRoutingModule,
        CodeHighLightModule
    ],
    declarations: [
        CommonDescComponent,
        AccordionComponent,
        ButtonComponent,
        DialogComponent,
        GrowlComponent,
        MessagesComponent,
        PanelComponent,
        ProgressBarComponent,
        SplitButtonComponent,
        TabViewComponent,
        TooltipComponent
    ]
})
export class CommonDescModule { }
