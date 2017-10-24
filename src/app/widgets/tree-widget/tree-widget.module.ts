import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
    TreeModule,
    TreeNode,
    ContextMenuModule
} from 'primeng/primeng';

const WIDGETS_MODULES = [
    TreeModule,
    ContextMenuModule
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WIDGETS_MODULES
    ],
    exports: [
        WIDGETS_MODULES
    ]
})
export class TreeWidgetModule { }
