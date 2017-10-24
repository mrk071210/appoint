import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-spinner-desc',
  templateUrl: './spinner.component.html',
  styleUrls: [ '../../description.common.scss', '../form-desc.component.scss', './spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  val1: number;
  val2: number;
  val3: number;
  val4: number;
  attributes: any[];
  eventsList: any[];
  styleList: any[];
  tsDemo1: string;
  tsDemo2: string;
  tsDemo3: string;
  tsDemo4: string;
  constructor() {
    this.attributes = [
      {
        'name': 'step',
        'type': 'number',
        'default': '1',
        'description': '递增/递减值的步骤因子'
      },
      {
        'name': 'min',
        'type': 'number',
        'default': 'null',
        'description': '最小边界值'
      },
      {
        'name': 'max',
        'type': 'number',
        'default': 'null',
        'description': '最大边界值'
      },
      {
        'name': 'placeholder',
        'type': 'string',
        'default': 'null',
        'description': '提示输入字段的文本'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '禁用该元素'
      },
      {
        'name': 'readonly',
        'type': 'boolean',
        'default': 'false',
        'description': '指定该元素为只读'
      },
      {
        'name': 'maxlength',
        'type': 'number',
        'default': 'null',
        'description': '输入字段允许最大字符数'
      },
      {
        'name': 'size',
        'type': 'number',
        'default': 'null',
        'description': '输入字段的大小'
      },
      {
        'name': 'decimalSeparator',
        'type': 'string',
        'default': '.',
        'description': '分数字符为小数'
      },
      {
        'name': 'thousandSeparator',
        'type': 'string',
        'default': ',',
        'description': '千位数的分隔符'
      },
      {
        'name': 'tabindex',
        'type': 'number',
        'default': 'null',
        'description': '元素索引按制表顺序'
      },
      {
        'name': 'formatInput',
        'type': 'boolean',
        'default': 'true',
        'description': '设置格式化用户输入'
      },
      {
        'name': 'inputId',
        'type': 'string',
        'default': 'null',
        'description': '为组件标签设置焦点输入的唯一标识符'
      },
      {
        'name': 'type',
        'type': 'string',
        'default': 'text',
        'description': '输入字段的类型'
      }
    ];
     this.eventsList = [
      {
        'name': 'onChange',
        'parameters': 'event: 更改事件',
        'description': '值更改时调用'
      },
      {
        'name': 'onBlur',
        'parameters': 'event: 失焦事件',
        'description': '自动完成失败时调用'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-spinner',
        'element': '容器元素'
      },
      {
        'name': 'ui-spinner-up',
        'element': 'up元素'
      },
      {
        'name': 'ui-spinner-down',
        'element': 'down元素'
      }
    ];
   }

  ngOnInit() {
    this.val4 = 100;
    this.tsDemo1 = `
export class SpinnerComponent implements OnInit {
  val1: number;
  constructor() { }

  ngOnInit() {
  }

}`;
this.tsDemo2 = `
export class SpinnerComponent implements OnInit {
  val2: number;
  constructor() { }

  ngOnInit() {
  }

}`;
this.tsDemo3 = `
export class SpinnerComponent implements OnInit {
  val3: number;
  constructor() { }

  ngOnInit() {
}

}`;
this.tsDemo4 = `
export class SpinnerComponent implements OnInit {
  val4: number;
  constructor() { }

  ngOnInit() {
    this.val4 = 100;
  }

}`;
  }

}
