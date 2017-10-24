import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-radio-button-desc',
  templateUrl: './radio-button.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  val1: string;
  val2: string;
  attributes: any[];
  eventsList: any[];
  styleList: any[];
  tsDemo1: string;
  tsDemo2: string;
  constructor() {
    this.attributes = [
      {
        'name': 'name',
        'type': 'string',
        'default': 'null',
        'description': '单选按钮组的名称'
      },
      {
        'name': 'value',
        'type': 'any',
        'default': 'null',
        'description': '单选按钮的值'
      },
      {
        'name': 'label',
        'type': 'string',
        'default': 'null',
        'description': '单选按钮的标签'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '禁用该元素'
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
        'description': '为组件标签设置焦点输入的唯一标识符'
      },
      {
        'name': 'style',
        'type': 'string',
        'default': 'null',
        'description': '元素的内联样式'
      },
      {
        'name': 'styleClass',
        'type': 'string',
        'default': 'null',
        'description': '元素的class样式'
      }
    ];
     this.eventsList = [
      {
        'name': 'onClick',
        'parameters': '-',
        'description': '单选按钮点击时调用'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-radiobutton',
        'element': '容器元素'
      },
      {
        'name': 'ui-radiobutton-box',
        'element': '图标容器'
      },
      {
        'name': 'ui-radiobutton-icon',
        'element': '图标元素'
      },
      {
        'name': 'ui-chkbox-label',
        'element': '标签元素'
      }
    ];
  }

  ngOnInit() {
    this.val2 = 'Option 2';
    this.tsDemo1 = `
export class RadioButtonComponent implements OnInit {
  val1: string;
  constructor() { }

  ngOnInit() {
  }

}`;
    this.tsDemo2 = `
export class RadioButtonComponent implements OnInit {
  val2: string;
  constructor() { }

  ngOnInit() {
    this.val2 = 'Option 2';
  }

}`;
  }

}
