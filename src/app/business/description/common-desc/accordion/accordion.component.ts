import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-accordion-desc',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss', '../../description.common.scss']
})
export class AccordionComponent implements OnInit {
    accordionProperties: any[];
    tabProperties: any[];
    events: any[];
    msgs = [];
    index: number = 0;
    constructor() { }

    ngOnInit() {
        this.accordionProperties = [
            {name:'multiple', type:'boolean', default:'false', description:'启用时，可以同时激活多个选项卡。 '},
            {name:'style', type:'string', default:'null', description:'组件的内联样式。 '},
            {name:'styleClass', type:'string', default:'false', description:'组件的样式类。 '},
            {name:'lazy', type:'boolean', default:'false', description:'定义当面板被选中时，是否在加载或按需创建非活动面板的元素。 '},
            {name:'activeIndex', type:'any', default:'null', description:'活动选项卡的索引或索引数组以编程方式更改所选的选项卡。 '},
        ];

        this.tabProperties = [
            {name:'header', type:'string', default:'null', description:'标签的标题 '},
            {name:'selected', type:'boolean', default:'false', description:'定义选项卡是否处于活动状态。'},
            {name:'disabled', type:'boolean', default:'false', description:'定义是否可以选择选项卡。'},
            {name:'canExpanded', type:'boolean', default:'true', description:'定义点击选项卡后是否展开，默认为有展开效果。'}
        ];

        this.events = [
            {name: 'onOpen', param: `event.originalEvent：点击事件
                event.index：选项卡的索引`, description: '当标签扩展时调用的回调。'},
            {name: 'onClose',param: `event.originalEvent：单击对象
                event.index：选项卡的索引`, description: '当标签关闭时调用的回调。'}
        ];
    }

    onTabClose(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index});
    }
    
    onTabOpen(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
    
    openNext() {
        this.index = (this.index === 3) ? 0 : this.index + 1;
    }
    
    openPrev() {
        this.index = (this.index === 0) ? 3 : this.index - 1;
    }
}
