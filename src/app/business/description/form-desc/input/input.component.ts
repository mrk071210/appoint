import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-input',
  templateUrl: './input.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './input.component.scss']
})
export class InputComponent implements OnInit {
  text: string;
  text2: string;
  disabled: boolean;
  attributes: any[];
  styleList: any[];
  tsDemo1: string;
  tsDemo2: string;

  constructor() {
    this.attributes = [
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '禁用该元素'
      },
      {
        'name': 'useClear',
        'type': 'boolean',
        'default': 'false',
        'description': '是否启用清除功能，注意：在"ui-inputgroup"指定的输入框组中使用时，需要给对应的input元素添加额外的样式类"kyee-input-clear"'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-inputtext',
        'element': '输入元素'
      }
    ];
   }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  ngOnInit() {
    this.disabled = true;
this.tsDemo1 = `
export class InputComponent implements OnInit {
  text: string;
  constructor() { }

  ngOnInit() {
  }

}`;
this.tsDemo2 = `
export class InputComponent implements OnInit {
  disabled: boolean;
  constructor() { }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  ngOnInit() {
    this.disabled = true;
  }

}`;
  }

}
