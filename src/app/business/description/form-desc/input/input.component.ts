import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-input',
  templateUrl: './input.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './input.component.scss']
})
export class InputComponent implements OnInit {
  text: string;
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
