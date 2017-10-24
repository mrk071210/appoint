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
    msgs: Message[] = [];

    constructor() { }

    ngOnInit() {
        this.properties = [
            {name:'value', type:'array', default:'null', description:'要显示的消息数组。'},
            {name:'closable', type:'boolean', default:'true', description:'定义是否消息框可以通过点击图标关闭。'}
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
