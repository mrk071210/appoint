import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-checkbox-desc',
  templateUrl: './checkbox.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  selectedCities: string[] = [];
  selectedCategories: string[] = ['Technology', 'Sports'];
  checked: false;
  attributes: any[];
  eventsList: any[];
  styleList: any[];
  tsDemo1: string;
  tsDemo2: string;
  tsDemo3: string;
  constructor() {
    this.attributes = [
      {
        'name': 'name',
        'type': 'string',
        'default': 'null',
        'description': '复选框组的名称'
      },
      {
        'name': 'value',
        'type': 'any',
        'default': 'null',
        'description': '复选框的值'
      },
      {
        'name': 'label',
        'type': 'string',
        'default': 'null',
        'description': '复选框的标签'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '设置该元素被禁用'
      },
      {
        'name': 'binary',
        'type': 'boolean',
        'default': 'false',
        'description': '允许选择一个布尔值而不是多个值'
      },
      {
        'name': 'tabindex',
        'type': 'number',
        'default': 'null',
        'description': '元素索引按制表顺序'
      },
      {
        'name': 'inputId',
        'type': 'string',
        'default': 'null',
        'description': '匹配为组件定义的标签的焦点输入的唯一标识符'
      },
      {
        'name': 'style',
        'type': 'object',
        'default': 'null',
        'description': '组件的内联样式'
      },
      {
        'name': 'styleClass',
        'type': 'string',
        'default': 'null',
        'description': '组件的Class样式'
      }
    ];
    this.eventsList = [
      {
        'name': 'onChange',
        'parameters': 'checked: 布尔值表示复选框的新状态',
        'description': '复选框单击时调用'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-chkbox',
        'element': '容器元素'
      },
      {
        'name': 'ui-chkbox-box',
        'element': '容器图标'
      },
      {
        'name': 'ui-chkbox-icon',
        'element': '图标元素'
      },
      {
        'name': 'ui-chkbox-label',
        'element': '标签元素'
      }
    ];
   }

  ngOnInit() {
    this.tsDemo1 = `
export class CheckboxComponent implements OnInit {
  selectedCities: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}`;
    this.tsDemo2 = `
export class CheckboxComponent implements OnInit {
  selectedCategories: string[] = ['Technology', 'Sports'];
  constructor() { }

  ngOnInit() {
  }

}`;
    this.tsDemo3 = `
export class CheckboxComponent implements OnInit {
  checked: false;
  constructor() { }

  ngOnInit() {
  }

}`;
  }

}
