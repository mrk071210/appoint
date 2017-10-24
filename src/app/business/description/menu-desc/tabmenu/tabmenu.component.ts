import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../widgets';

@Component({
  selector: 'kyee-tabmenu-desc',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss', '../menu-desc.component.scss', '../../description.common.scss']
})
export class TabmenuComponent implements OnInit {
  // 选项卡示例数据
  tabmenuData: MenuItem[] = [
    { label: 'Stats', icon: 'fa-bar-chart' },
    { label: 'Calendar', icon: 'fa-calendar' },
    { label: 'Documentation', icon: 'fa-book' },
    { label: 'Support', icon: 'fa-support' },
    { label: 'Social', icon: 'fa-twitter' }
  ];
  // TS示例代码
  tabmenuDemoCode = `
import { Component, OnInit } from '@angular/core';
import { MenuWidgetsModule, MenuItem } from 'widgets'; // widgets 为根目录widgets文件夹

@Component({
  selector: 'kyee-tabmenu-desc',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss']
})
export class TabmenuComponent implements OnInit {
  tabmenuData: MenuItem[] = [
    { label: 'Stats', icon: 'fa-bar-chart' },
    { label: 'Calendar', icon: 'fa-calendar' },
    { label: 'Documentation', icon: 'fa-book' },
    { label: 'Support', icon: 'fa-support' },
    { label: 'Social', icon: 'fa-twitter' }
  ];
  constructor() { }

  ngOnInit() { }

}  
`;
  //改变选中项的示例代码
  tabmenuDemoCode1 = `
export class TabmenuComponent implements OnInit {
    
    items: MenuItem[];
    
    activeItem: MenuItem;

    ngOnInit() {
        this.items = [
            {label: 'Stats', icon: 'fa-bar-chart'},
            {label: 'Calendar', icon: 'fa-calendar'},
            {label: 'Documentation', icon: 'fa-book'},
            {label: 'Support', icon: 'fa-support'},
            {label: 'Social', icon: 'fa-twitter'}
        ];
        
        this.activeItem = this.items[2];  // Documentation被选中
        
    }
}
`;
  //属性
  tabmenuProperties = [
    {
      'name': 'model',
      'type': 'array',
      'default': 'null',
      'description': '菜单数组'
    },
    {
      'name': 'activeItem',
      'type': 'MenuItem',
      'default': 'null',
      'description': '定义默认的选中菜单'
    },
    {
      'name': 'style',
      'type': 'string',
      'default': 'null',
      'description': '组件的内联样式'
    },
    {
      'name': 'styleClass',
      'type': 'string',
      'default': 'null',
      'description': '组件的样式类'
    }
  ];
  //样式
  tabmenuStyles = [
    {
      'name': 'ui-tabmenu',
      'element': '容器元素'
    },
    {
      'name': 'ui-tabmenu-nav',
      'element': '菜单列表的标题'
    },
    {
      'name': 'ui-tabmenuitem',
      'element': '菜单元素'
    },
    {
      'name': 'ui-menuitem-link',
      'element': '菜单链接'
    },{
      'name': 'ui-menuitem-text',
      'element': '菜单内容'
    },{
      'name': 'ui-menuitem-icon',
      'element': '菜单图标'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
