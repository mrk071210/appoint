import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../widgets';

@Component({
  selector: 'kyee-panel-desc',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss', '../../description.common.scss']
})
export class PanelComponent implements OnInit {
    properties: any[];
    events: any[];
    items: MenuItem[];
    msgs = [];

    constructor() { }

    ngOnInit() {
        this.properties = [
            {name:'header', type:'string', default:'null', description:'面板的标题文字。'},
            {name:'toggleable', type:'boolean', default:'false', description:'定义面板的内容是否可以展开和折叠。'},
            {name:'collapsed', type:'boolean', default:'false', description:'定义面板内容的初始状态，也支持单向或双向绑定。'},
            {name:'style', type:'string', default:'null', description:'组件的内联样式。'},
            {name:'styleClass', type:'string', default:'null', description:'组件的样式类。'},
            {name:'expandIcon', type:'string', default:'fa-plus', description:'展开切换按钮的图标。'},
            {name:'collapseIcon', type:'string', default:'fa-minus', description:'切换按钮的折叠图标。'}
        ];

        this.events = [
            {name: 'onBeforeToggle', param: `event.originalEvent：浏览器事件;
                event.collapsed：state作为boolean`, description: '在内容切换之前调用的回调。'},
            {name: 'onAfterToggle',param: `event.originalEvent：浏览器事件;   
                event.collapsed：state作为boolean`, description: '在内容切换之后调用的回调。'}
        ];

        this.items = [
            {label: '更新', icon: 'fa-refresh', command: () => {
                this.update();
            }},
            {label: '删除', icon: 'fa-close', command: () => {
                this.delete();
            }},
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: '公共模块简介', icon: 'fa-paint-brush', routerLink: ['/business/description/common-desc/desc']}
        ];
    }

    save() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'保存成功'});
    }
    
    update() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'更新成功'});
    }
    
    delete() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'删除成功'});
    }
}
