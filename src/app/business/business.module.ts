import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { CommonSidebarComponent } from '../basic/common-sidebar';

@NgModule({
    imports: [
        CommonModule,
        BusinessRoutingModule
    ],
    declarations: [
        BusinessComponent,
        CommonSidebarComponent
]
})
export class BusinessModule { }
