import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../widgets';

@Component({
  selector: 'kyee-split-button-desc',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.scss', '../../description.common.scss']
})
export class SplitButtonComponent implements OnInit {

    properties: any[];
    msgs = [];
    items: MenuItem[];
    
    ngOnInit() {
        this.properties = [
            {name: 'label', type: 'string', default: 'null', description: '按钮的文本。'},
            {name: 'icon', type: 'string', default: 'null', description: '图标名称。'},
            {name: 'iconPos', type: 'string', default: 'left', description: '图标的位置，有效值为“left”和“right”。'},
            {name: 'style', type: 'string', default: 'null', description: '组件的内联样式。'},
            {name: 'styleClass', type: 'string', default: 'null', description: '组件的样式类。'},
            {name: 'menuStyle', type: 'string', default: 'null', description: '展开菜单的内联样式。'},
            {name: 'menuStyleClass', type: 'string', default: 'null', description: '展开菜单的样式类。'},
            {name: 'appendTo', type: 'any', default: 'null', description: '目标元素附加覆盖层，有效值为“body”或另一元素的本地ng模板变量。'},
            {name: 'disabled', type: 'boolean', default: 'false', description: '指定组件是否被禁用。'},
            {name: 'tabindex', type: 'number', default: 'null', description: '选项卡中元素的索引。'}
        ] 

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
