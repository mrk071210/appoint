import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../widgets';

@Component({
  selector: 'kyee-megamenu-desc',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss', '../menu-desc.component.scss', '../../description.common.scss']
})
export class MegamenuComponent implements OnInit {
  // 二级菜单示例数据
  megamenuData = [
    {
      label: 'TV', icon: 'fa-check',
      items: [
        [
          {
            label: 'TV 1',
            items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
          },
          {
            label: 'TV 2',
            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
          }
        ],
        [
          {
            label: 'TV 3',
            items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
          },
          {
            label: 'TV 4',
            items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
          }
        ]
      ]
    },
    {
      label: 'Sports', icon: 'fa-soccer-ball-o',
      items: [
        [
          {
            label: 'Sports 1',
            items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
          },
          {
            label: 'Sports 2',
            items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
          },

        ],
        [
          {
            label: 'Sports 3',
            items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
          },
          {
            label: 'Sports 4',
            items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
          }
        ],
        [
          {
            label: 'Sports 5',
            items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
          },
          {
            label: 'Sports 6',
            items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
          }
        ]
      ]
    },
    {
      label: 'Entertainment', icon: 'fa-child',
      items: [
        [
          {
            label: 'Entertainment 1',
            items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
          },
          {
            label: 'Entertainment 2',
            items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
          }
        ],
        [
          {
            label: 'Entertainment 3',
            items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
          },
          {
            label: 'Entertainment 4',
            items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
          }
        ]
      ]
    },
    {
      label: 'Technology', icon: 'fa-gears',
      items: [
        [
          {
            label: 'Technology 1',
            items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
          },
          {
            label: 'Technology 2',
            items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
          },
          {
            label: 'Technology 3',
            items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
          }
        ],
        [
          {
            label: 'Technology 4',
            items: [{ label: 'Technology 4.1' }, { label: 'Technology 4.2' }]
          }
        ]
      ]
    }
  ];
  // TS示例代码
  megamenuDemoCode: any = `
import { Component, OnInit } from '@angular/core';
import { MenuWidgetsModule, MenuItem } from 'portalface/widgets'; //注：引用portalface库中的widgets模块下的MenuWidgetsModule, MenuItem

@Component({
  selector: 'kyee-megamenu-desc',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss']
})
export class MegamenuComponent implements OnInit {
  megamenuData = [
      {
        label: 'TV', icon: 'fa-check',
        items: [
          [
            {
              label: 'TV 1',
              items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
            },
            {
              label: 'TV 2',
              items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
            }
          ],
          [
            {
              label: 'TV 3',
              items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
            },
            {
              label: 'TV 4',
              items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
            }
          ]
        ]
      },
      {
        label: 'Sports', icon: 'fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
            },
            {
              label: 'Sports 2',
              items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
            },

          ],
          [
            {
              label: 'Sports 3',
              items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
            },
            {
              label: 'Sports 4',
              items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
            },
            {
              label: 'Sports 6',
              items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
            }
          ]
        ]
      },
      {
        label: 'Entertainment', icon: 'fa-child',
        items: [
          [
            {
              label: 'Entertainment 1',
              items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
            },
            {
              label: 'Entertainment 2',
              items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
            }
          ],
          [
            {
              label: 'Entertainment 3',
              items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
            },
            {
              label: 'Entertainment 4',
              items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
            }
          ]
        ]
      },
      {
        label: 'Technology', icon: 'fa-gears',
        items: [
          [
            {
              label: 'Technology 1',
              items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
            },
            {
              label: 'Technology 2',
              items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
            },
            {
              label: 'Technology 3',
              items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{ label: 'Technology 4.1' }, { label: 'Technology 4.2' }]
            }
          ]
        ]
      }
    ];
  constructor() { }

  ngOnInit() { }

}
`;
  //属性
  megamenuProperties = [
    {
      'name': 'model',
      'type': 'array',
      'default': 'null',
      'description': '菜单数组'
    },
    {
      'name': 'orientation',
      'type': 'string',
      'default': 'horizontal',
      'description': '定义方向，有效值为水平和垂直'
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
  megamenuStyles = [
    {
      'name': 'ui-megamenu',
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
