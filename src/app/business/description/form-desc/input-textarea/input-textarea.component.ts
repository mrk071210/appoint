import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './input-textarea.component.scss']
})
export class InputTextareaComponent implements OnInit {
  tsDemo1: string;
  tsDemo2: string;
  attributes: any[];
  styleList: any[];
  eventsList: any[];
  
  constructor() { }

  ngOnInit() {
    this.tsDemo1 = `
export class InputTextareaComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}`;

    this.attributes = [
      {
        'name': 'autoResize',
        'type': 'boolean',
        'default': 'false',
        'description': '当存在时，文本大小随着键入而变化'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '当存在时，它指定该元素应被禁用'
      }
    ];
    this.eventsList = [
      {
        'name': 'onResize',
        'parameters': '	event: 事件对象',
        'description': '元素调整大小时调用的回调',
      }

    ];
    this.styleList = [
      {
        'name': 'ui-inputtextarea',
        'element': 'Textarea元素'
      }
    ];
  }

}
