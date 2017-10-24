import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-menu-desc',
  templateUrl: './menu-desc.component.html',
  styleUrls: ['./menu-desc.component.scss', '../description.common.scss']
})
export class MenuDescComponent implements OnInit {

  menuOptionS = [
    {
      'name': 'label',
      'type': 'string',
      'default': 'null',
      'description': '项目名称'
    },
    {
      'name': 'icon',
      'type': 'string',
      'default': 'null',
      'description': '项目图标'
    },
    {
      'name': 'command',
      'type': 'function',
      'default': 'null',
      'description': '单击项目时执行回调'
    },
    {
      'name': 'url',
      'type': 'string',
      'default': 'null',
      'description': '用于外部导航的链接'
    },
    {
      'name': 'routerLink',
      'type': 'array',
      'default': 'null',
      'description': '用于内部导航的链接'
    },
    {
      'name': 'routerLinkActiveOptions',
      'type': 'object',
      'default': 'null',
      'description': '活跃路由配置'
    },
    {
      'name': 'items',
      'type': 'array',
      'default': 'null',
      'description': '菜单数组'
    },
    {
      'name': 'expanded',
      'type': 'boolean',
      'default': 'false',
      'description': '菜单是否可见'
    },
    {
      'name': 'disabled',
      'type': 'boolean',
      'default': 'false',
      'description': '当设置为true时，禁用该菜单'
    },
    {
      'name': 'visible',
      'type': 'boolean',
      'default': 'true',
      'description': '是否创建菜单的dom元素'
    },
    {
      'name': 'target',
      'type': 'string',
      'default': 'null',
      'description': '指定打开链接文档的位置'
    },
    {
      'name': 'separator',
      'type': 'boolean',
      'default': 'true',
      'description': '将该项目定义为分隔符'
    },
    {
      'name': 'style',
      'type': 'object',
      'default': 'null',
      'description': '菜单的内联样式'
    },
    {
      'name': 'styleClass',
      'type': 'string',
      'default': 'null',
      'description': '菜单样式类名'
    },
    {
      'name': 'badge',
      'type': 'string',
      'default': 'null',
      'description': '标记的值'
    },
    {
      'name': 'badgeStyleClass',
      'type': 'string',
      'default': 'null',
      'description': '标记的样式类'
    }
  ];

  html1 = `
import {MenuWidgetsModule, MenuItem} from 'widgets'; // widgets 为根目录widgets文件夹

export class MenuDemo {
    
    private items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa-plus'},
                {label: 'Open', icon: 'fa-download'}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Undo', icon: 'fa-refresh'},
                {label: 'Redo', icon: 'fa-repeat'}
            ]
        }];
    }
} 
`;
  html2 = `
export class MenuDemo {
    
    private items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa-plus', command: (event) => {
                    //event.originalEvent: Browser event
                    //event.item: menuitem metadata
                }}
            ]
        }
    }
}
`;
  html3 = `
export class MenuDemo {
    
    private items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa-plus', url: 'http://www.primefaces.org/primeng'},
                {label: 'Open', icon: 'fa-download', routerLink: ['/pagename']}
            ]
        }
    }
}
`;

  constructor() { }

  ngOnInit() { }

}
