import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-dialog-desc',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss', '../../description.common.scss']
})
export class DialogComponent implements OnInit {
    properties: any[];
    events: any[];
    display: boolean = false;

    constructor() { }

    ngOnInit() {
        this.properties = [
            {name:'header', type:'string', default:'null', description:'对话框的标题文本。'},
            {name:'draggable', type:'boolean', default:'true', description:'启用标题位置拖动以更改位置。'},
            {name:'resizable', type:'boolean', default:'true', description:'启用对话框右下角区域内容大小调整。'},
            {name:'minWidth', type:'number', default:'150', description:'可调整大小的对话框的最小宽度。'},
            {name:'minHeight', type:'number', default:'150', description:'可调整大小的对话框的最小高度。'},
            {name:'width', type:'int', default:'300', description:'对话框的宽度。'},
            {name:'height', type:'int', default:'auto', description:'对话框的宽度。'},
            {name:'contentStyle', type:'object', default:'null', description:'内容部分的style。'},
            {name:'visible', type:'boolean', default:'false', description:'指定对话框的可见性。'},
            {name:'modal', type:'boolean', default:'false', description:'定义当显示对话框时是否应阻止背景。'},
            {name:'closeOnEscape', type:'boolean', default:'true', description:'按Esc键应隐藏对话框的具体内容。'},
            {name:'dismissableMask', type:'boolean', default:'false', description:'单击模式背景应该隐藏对话框的具体内容。'},
            {name:'closable', type:'boolean', default:'true', description:'在标题中添加一个关闭图标以隐藏对话框。'},
            {name:'responsive', type:'boolean', default:'true', description:'在响应模式下，对话框将自己调整为屏幕宽度。'},
            {name:'appendTo', type:'any', default:'null', description:'目标元素附加对话框，有效值为“body”或另一个元素的本地ng模板变量。'},
            {name:'style', type:'string', default:'null', description:'组件的内联样式。'},
            {name:'styleClass', type:'string', default:'null', description:'组件的样式类。'},
            {name:'showHeader', type:'boolean', default:'true', description:'是否显示标题。'},
            {name:'positionLeft', type:'number', default:'null', description:'对话框的距左坐标值。'},
            {name:'positionTop', type:'number', default:'null', description:'对话框的距上坐标值。'}
        ];

        this.events = [
            {name: 'onShow', param: `event：事件对象`, description: '在显示对话框时调用的回调。'},
            {name: 'onHide',param: `event：事件对象`, description: '在隐藏对话框时调用的回调。'}
        ];
    }

    showDialog() {
        this.display = true;
    }
}
