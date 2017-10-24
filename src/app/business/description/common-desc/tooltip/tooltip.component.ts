import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kyee-tooltip-desc',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss', '../../description.common.scss']
})
export class TooltipComponent implements OnInit {
    properties: any[];

    constructor() { }

    ngOnInit() {
        this.properties = [
            {name:'pTooltip', type:'string', default:'null', description:'Tooltip的文字。'},
            {name:'tooltipPosition', type:'string', default:'right', description:'Tooltip的位置，有效值为 right, left, top 和 bottom。'},
            {name:'tooltipEvent', type:'string', default:'hover', description:'事件显示Tooltip，有效值是hover和focus。'},
            {name:'positionStyle', type:'string', default:'absolute', description:'CSS属性position的值。'},
            {name:'tooltipDisabled', type:'boolean', default:'false', description:'指定Tooltip是否被禁用。'},
            {name:'appendTo', type:'string', default:'any', description:'目标元素附加覆盖层，有效值为“body”，“target”或另一元素的本地ng模板变量。'},
            {name:'hideDelay', type:'number', default:'null', description:'延迟隐藏Tooltip（以毫秒为单位）。'},
            {name:'showDelay', type:'number', default:'null', description:'延迟显示Tooltip（以毫秒为单位）。'},
            {name:'tooltipStyleClass', type:'string', default:'null', description:'Tooltip的样式类。'},
            {name:'escape', type:'boolean', default:'true', description:'默认情况下，工具提示内容将作为文本呈现。 设置为false以支持内容中的html标签.'},
        ];
    }
}
