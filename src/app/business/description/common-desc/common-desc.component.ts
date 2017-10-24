import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kyee-common-desc',
    templateUrl: './common-desc.component.html',
    styleUrls: ['./common-desc.component.scss', '../description.common.scss']
})
export class CommonDescComponent implements OnInit {
    commonItems: any[];
    constructor() { }

    ngOnInit() {
        this.commonItems = [
            {'name': '按钮', 'target': '<button pButton></button>', 'desc': ''},
            {'name': '复合按钮', 'target': '<p-splitButton></p-splitButton>', 'desc': ''},
            {'name': '面板块', 'target': '<p-panel></p-panel>', 'desc': ''},
            {'name': '便签面板', 'target': '<p-tabView><p-tabPanel></p-tabPanel></p-tabView>', 'desc': ''},
            {'name': '手风琴面板', 'target': '<p-accordion><p-accordionTab></p-accordionTab></p-accordion>', 'desc': ''},
            {'name': '提示', 'target': '<input type="text" pTooltip="tooltip">', 'desc': ''},
            {'name': '弹出框', 'target': '<p-dialog [(visible)]="display"></p-dialog>', 'desc': ''},
            {'name': '确认弹出框', 'target': '<p-confirmDialog></p-confirmDialog >', 'desc': ''},
            {'name': '弹窗提醒消息', 'target': '<p-growl></p-growl>', 'desc': ''},
            {'name': '信息展示', 'target': '<p-messages></p-messages>', 'desc': ''},
            {'name': '进度条', 'target': '<p-progressBar></p-progressBar>', 'desc': ''},
        ]
    }
}
