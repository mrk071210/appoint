import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../widgets';

@Component({
  selector: 'kyee-tieredmenu-desc',
  templateUrl: './tieredmenu.component.html',
  styleUrls: ['./tieredmenu.component.scss', '../menu-desc.component.scss', '../../description.common.scss']
})
export class TieredmenuComponent implements OnInit {
  // 菜单示例数据
  tieredmenuData: MenuItem[] = [
    {
      label: 'File',
      icon: 'fa-file-o',
      items: [{
        label: 'New',
        icon: 'fa-plus',
        items: [
          { label: 'Project' },
          { label: 'Other' },
        ]
      },
      { label: 'Open' },
      { separator: true },
      { label: 'Quit' }
      ]
    },
    {
      label: 'Edit',
      icon: 'fa-edit',
      items: [
        { label: 'Undo', icon: 'fa-mail-forward' },
        { label: 'Redo', icon: 'fa-mail-reply' }
      ]
    },
    {
      label: 'Help',
      icon: 'fa-question',
      items: [
        {
          label: 'Contents'
        },
        {
          label: 'Search',
          icon: 'fa-search',
          items: [
            {
              label: 'Text',
              items: [
                {
                  label: 'Workspace'
                }
              ]
            },
            {
              label: 'File'
            }
          ]
        }
      ]
    },
    {
      label: 'Actions',
      icon: 'fa-gear',
      items: [
        {
          label: 'Edit',
          icon: 'fa-refresh',
          items: [
            { label: 'Save', icon: 'fa-save' },
            { label: 'Update', icon: 'fa-save' },
          ]
        },
        {
          label: 'Other',
          icon: 'fa-phone',
          items: [
            { label: 'Delete', icon: 'fa-minus' }
          ]
        }
      ]
    },
    { separator: true },
    {
      label: 'Quit', icon: 'fa-minus'
    }
  ];
  // TS示例代码
  tieredmenuDemoCode = `
import { Component, OnInit } from '@angular/core';
import { MenuWidgetsModule, MenuItem } from 'portalface/widgets'; //注：引用portalface库中的widgets模块下的MenuWidgetsModule, MenuItem

@Component({
  selector: 'kyee-tieredmenu-desc',
  templateUrl: './tieredmenu.component.html',
  styleUrls: ['./tieredmenu.component.scss']
})

export class TieredmenuComponent implements OnInit {
  tieredmenuData: MenuItem[] = [
    {
      label: 'File',
      icon: 'fa-file-o',
      items: [{
        label: 'New',
        icon: 'fa-plus',
        items: [
          { label: 'Project' },
          { label: 'Other' },
        ]
      },
      { label: 'Open' },
      { separator: true },
      { label: 'Quit' }
      ]
    },
    {
      label: 'Edit',
      icon: 'fa-edit',
      items: [
        { label: 'Undo', icon: 'fa-mail-forward' },
        { label: 'Redo', icon: 'fa-mail-reply' }
      ]
    },
    {
      label: 'Help',
      icon: 'fa-question',
      items: [
        {
          label: 'Contents'
        },
        {
          label: 'Search',
          icon: 'fa-search',
          items: [
            {
              label: 'Text',
              items: [
                {
                  label: 'Workspace'
                }
              ]
            },
            {
              label: 'File'
            }
          ]
        }
      ]
    },
    {
      label: 'Actions',
      icon: 'fa-gear',
      items: [
        {
          label: 'Edit',
          icon: 'fa-refresh',
          items: [
            { label: 'Save', icon: 'fa-save' },
            { label: 'Update', icon: 'fa-save' },
          ]
        },
        {
          label: 'Other',
          icon: 'fa-phone',
          items: [
            { label: 'Delete', icon: 'fa-minus' }
          ]
        }
      ]
    },
    { separator: true },
    {
      label: 'Quit', icon: 'fa-minus'
    }
  ];
  constructor() { }

  ngOnInit() { }

}
`;
//属性
  tieredmenuProperties = [
    {
      'name': 'model',
      'type': 'array',
      'default': 'null',
      'description': '菜单数组'
    },
    {
      'name': 'popup',
      'type': 'boolean',
      'default': 'false',
      'description': '定义菜单是否显示为弹出窗口'
    },
    {
      'name': 'appendTo',
      'type': 'any',
      'default': 'null',
      'description': '目标元素附加覆盖层，有效值为“body”或另一元素的本地ng模板变量'
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
  //方法
  tieredmenuMethods = [
    {
      'name': 'toggle',
      'parameters': 'event: browser event',
      'description': '切换弹出菜单的可见性'
    },
    {
      'name': 'show',
      'parameters': 'event: browser event',
      'description': '显示弹出菜单'
    },
    {
      'name': 'hide',
      'parameters': 'event: browser event',
      'description': '隐藏弹出菜单'
    }
  ];
  //样式
  tieredmenuStyles = [
    {
      'name': 'ui-tieredmenu',
      'element': '容器元素'
    },
    {
      'name': 'ui-menu-list',
      'element': '列表元素'
    },
    {
      'name': 'ui-menuitem',
      'element': '菜单元素'
    },
    {
      'name': 'ui-menuitem-text',
      'element': '菜单内容'
    },
    {
      'name': 'ui-menuitem-icon',
      'element': '菜单图标'
    },
    {
      'name': 'ui-submenu-icon',
      'element': '指向子菜单的箭头图标'
    }
  ];
  constructor() { }

  ngOnInit() { }

}
