import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
    ButtonModule,
    SplitButtonModule,
    AccordionModule,
    PanelModule,
    TabViewModule,
    DialogModule,
    TooltipModule,
    MessagesModule,
    GrowlModule,
    ProgressBarModule,
    Message
} from 'primeng/primeng';

const WIDGETS_MODULES = [
    ButtonModule, // 按钮
    SplitButtonModule, // 复合按钮

    AccordionModule, // 手风琴面板
    PanelModule, // 面板快
    TabViewModule, // 便签面板

    DialogModule, // 弹出框
    TooltipModule, // 提示信息

    MessagesModule, // 提醒消息
    GrowlModule, // 弹窗提醒消息

    ProgressBarModule // 进度条
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
export class CommonWidgetsModule { }
