import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kyee-tab-view-desc',
    templateUrl: './tab-view.component.html',
    styleUrls: ['./tab-view.component.scss', '../../description.common.scss']
})
export class TabViewComponent implements OnInit {
    tabViewProperties: any[];
    tabPanelProperties: any[];
    events: any[];
    msgs = [];
    constructor() { }

    ngOnInit() {
        this.tabViewProperties = [
            {name:'orientation', type:'string', default:'top', description:'标签标题的方向。'},
            {name:'activeIndex', type:'number', default:'null', description:'通过编程方式更改所选选项卡的活动选项卡的索引。'},
            {name:'style', type:'string', default:'null', description:'组件的内联样式。'},
            {name:'styleClass', type:'string', default:'null', description:'组件的样式类。'}
        ];

        this.tabPanelProperties = [
            {name:'header', type:'string', default:'null', description:'面板的标题文字。'},
            {name:'selected', type:'boolean', default:'false', description:'定义选项卡是否处于活动状态。'},
            {name:'disabled', type:'boolean', default:'false', description:'如果为真，则无法激活标签。'},
            {name:'closable', type:'boolean', default:'false', description:'定义是否可以删除选项卡。'},
            {name:'headerStyle', type:'string', default:'null', description:'标签页的内联样式。'},
            {name:'headerStyleClass', type:'string', default:'null', description:'标签页的样式类。'},
            {name:'controlClose', type:'boolean', default:'false', description:'标签关闭是否被控制在onClose事件。'},
            {name:'lazy', type:'boolean', default:'false', description:'定义当面板被选中时，是否在加载或按需创建非活动面板的元素。'}
        ];

        this.events = [
            {name: 'onChange', param: `event.originalEvent：点击事件
              event.index：所选选项卡的索引`, description: '在标签更改时调用的回调。'},
            {name: 'onClose',param: `event.originalEvent：点击事件
                event.index：关闭选项卡的索引
                event.close：回调以实际关闭选项卡，仅在启用了controlClose时可用。
              `, description: '在标签关闭时调用的回调。'}
        ];
    }

    onTabChange(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
}
