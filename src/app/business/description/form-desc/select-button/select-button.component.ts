import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-select-button-desc',
  templateUrl: './select-button.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {
  types;
  selectedType: string;
  selectedTypes: string[];
  attributes: any[];
  eventsList: any[];
  tsDemo1: string;
  tsDemo2: string;
  constructor() {
    this.types = [];
    this.types.push({label: 'Apartment', value: 'Apartment'});
    this.types.push({label: 'House', value: 'House'});
    this.types.push({label: 'Studio', value: 'Studio'});

    this.attributes = [
      {
        'name': 'options',
        'type': 'array',
        'default': 'null',
        'description': '要显示的可选选项的一组选择项'
      },
      {
        'name': 'multiple',
        'type': 'boolean',
        'default': 'false',
        'description': '设置允许选择多个值'
      },
      {
        'name': 'tabindex',
        'type': 'number',
        'default': 'null',
        'description': '元素索引按制表顺序'
      },
      {
        'name': 'style',
        'type': 'object',
        'default': 'null',
        'description': '组件的内联样式'
      },
      {
        'name': 'itemStyle',
        'type': 'object',
        'default': 'null',
        'description': '组件内每个按钮的内联样式'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '禁用该元素'
      }
    ];
     this.eventsList = [
      {
        'name': 'onChange',
        'parameters': 'event.originalEvent: 浏览器事件' + '；' + 'event.value: 单值或所选值的数组',
        'description': '值更改时调用'
      },
      {
        'name': 'onOptionClick',
        'parameters': 'event.originalEvent: 浏览器事件' + '；' + 'event.option: 点击按钮的选中实例' + '；' + 'event.option: 点击按钮的索引',
        'description': '点击按钮时调用'
      }
    ];
   }

  clear() {
    this.selectedType = null;
    this.selectedTypes = [];
  }
  ngOnInit() {
    this.selectedTypes = ['Apartment', 'Studio'];
    this.tsDemo1 = `
export class SelectButtonComponent implements OnInit {
  types;
  selectedType: string;
  constructor() {
    this.types = [];
    this.types.push({label: 'Apartment', value: 'Apartment'});
    this.types.push({label: 'House', value: 'House'});
    this.types.push({label: 'Studio', value: 'Studio'});
  }
  ngOnInit() {
  }

}`;
    this.tsDemo2 = `
export class SelectButtonComponent implements OnInit {
  types;
  selectedTypes: string[];
  constructor() {
    this.types = [];
    this.types.push({label: 'Apartment', value: 'Apartment'});
    this.types.push({label: 'House', value: 'House'});
    this.types.push({label: 'Studio', value: 'Studio'});
   }

  clear() {
    this.selectedTypes = [];
  }
  ngOnInit() {
    this.selectedTypes = ['Apartment', 'Studio'];
  }

}
    `;
  }

}
