import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../widgets';

@Component({
  selector: 'kyee-breadcrumb-desc',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss', '../menu-desc.component.scss', '../../description.common.scss']
})
export class BreadcrumbComponent implements OnInit {
  
  // 面包屑示例数据
  breadcrumbData: MenuItem[] = [
    { label: '京颐集团', url: 'http://www.kyee.com.cn/' },
    { label: '趣医网', url: 'https://www.quyiyuan.com/' },
    { label: '架构部' },
    { label: '前端组' }
  ];
  // TS示例代码
  breadcrumbDemoCode: any = `
import { Component, OnInit } from '@angular/core';
import { MenuWidgetsModule, MenuItem } from 'portalface/widgets'; //注：引用portalface库中的widgets模块下的MenuWidgetsModule, MenuItem

@Component({
  selector: 'kyee-breadcrumb-desc', 
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbData: MenuItem[] = [
    { label: '京颐集团', url: 'http://www.kyee.com.cn/' },
    { label: '趣医网', url: 'https://www.quyiyuan.com/' },
    { label: '架构部' },
    { label: '前端组' }
  ];

  constructor() { }

  ngOnInit() { }
}
`;
  //属性
  breadcrumbProperties = [
    {
      'name': 'model',
      'type': 'array',
      'default': 'null',
      'description': '菜单数组'
    },
    {
      'name': 'home',
      'type': 'MenuItem',
      'default': 'null',
      'description': '用于home图标的菜单配置'
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
  breadcrumbStyles = [
    {
      'name': 'ui-breadcrumb',
      'element': '容器元素'
    },
    {
      'name': 'ui-menuitem',
      'element': '菜单项元素'
    },
    {
      'name': 'ui-menuitem-text',
      'element': '菜单名称'
    },
    {
      'name': 'ui-breadcrumb-chevron',
      'element': '分隔图标'
    },
  ];

  constructor() { }

  ngOnInit() { }

}
