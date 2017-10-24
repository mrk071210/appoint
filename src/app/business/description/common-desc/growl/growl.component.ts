import { Component, OnInit } from '@angular/core';
import { Message } from '../../../../widgets';

@Component({
  selector: 'kyee-growl-desc',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss', '../../description.common.scss']
})
export class GrowlComponent implements OnInit {
    properties: any[];
    events: any[];
    Styling: any[];
    msgs: Message[] = [];

    constructor() { }

    ngOnInit() {
        this.properties = [
            {name:'value', type:'array', default:'null', description:'要显示的消息数组。'},
            {name:'sticky', type:'boolean', default:'false', description:'定义时，在life属性定义的时间段后，弹出消息不会自动删除。'},
            {name:'life', type:'number', default:'3000', description:'删除之前以毫秒显示消息的时间。'},
            {name:'style', type:'string', default:'null', description:'组件的内联样式。'},
            {name:'styleClass', type:'string', default:'null', description:'组件的样式类。'},
            {name:'immutable', type:'boolean', default:'true', description:'定义消息数据的操作方式。'},
        ];

        this.events = [
            {name: 'onClose', param: `message：已删除信息`, description: '回调在消息关闭时调用。'},
            {name: 'onClick', param: `message：点击的消息`, description: '单击消息时调用回调。'},
            {name: 'onHover', param: `message：鼠标进入的消息`, description: '鼠标进入消息时调用回调。'}
        ];

        this.Styling = [
            {name: 'ui-growl', element: `主容器元素。`},
            {name: 'ui-growl-container', element: `一个消息项的容器。`},
            {name: 'ui-growl-item', element: `消息元素。`},
            {name: 'ui-growl-icon-close', element: `消息的关闭图标。`},
            {name: 'ui-growl-image', element: `严格的图标。`},
            {name: 'ui-growl-message', element: `消息文本容器。`},
            {name: 'ui-growl-title', element: `消息摘要。`}
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
