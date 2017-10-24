import { Component, OnInit } from '@angular/core';
import { Message } from '../../../../widgets';

@Component({
  selector: 'kyee-messages-desc',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss', '../../description.common.scss']
})
export class MessagesComponent implements OnInit {
    properties: any[];
    events: any[];
    styling: any[];
    msgs: Message[] = [];

    constructor() { }

    ngOnInit() {
        this.properties = [
            {name:'value', type:'array', default:'null', description:'要显示的消息数组。'},
            {name:'closable', type:'boolean', default:'true', description:'定义是否消息框可以通过点击图标关闭。'}
        ];

        this.styling = [
            {name: 'ui-messages', element: `容器元素。`},
            {name: 'ui-messages-info', element: `显示信息消息时的容器元素。`},
            {name: 'ui-messages-warn', element: `显示警告消息时的容器元素。`},
            {name: 'ui-messages-error', element: `显示错误消息时的容器元素。`},
            {name: 'ui-messages-success', element: `显示成功消息时的容器元素。`},
            {name: 'ui-messages-close', element: `关闭图标。`},
            {name: 'ui-messages-icon', element: `严格的图标。`},
            {name: 'ui-messages-summary', element: `消息摘要。`},
            {name: 'ui-messages-detail', element: `消息详情。`},
        ];
    }

    showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
    }

    showInfo() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
    }

    showWarn() {
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
    }

    showError() {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
    }

    showMultiple() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
        this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
        this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
    }

    clear() {
        this.msgs = [];
    }
}
