import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-form-desc',
  templateUrl: './form-desc.component.html',
  styleUrls: ['../description.common.scss', './form-desc.component.scss']
})
export class FormDescComponent implements OnInit {
  commonItems: any[];
  constructor() { }

  ngOnInit() {
   // 输入框组、输入自动填充、日历、复选框、下拉选择框、文本输入、列表选择、下拉多选框、单选列表、数字微调、tab选择按钮列表。
    this.commonItems = [
            {
              'name': '输入框组',
              'target': '<div class="ui-inputgroup"><input type="text" pInputText></div>',
              'desc': ''
            },
            {
              'name': 'textarea',
              'target': '<textarea pInputTextarea></textarea>',
              'desc': ''
            },
            {
              'name': '输入自动填充',
              'target': '<p-autoComplete></p-autoComplete>',
              'desc': ''
            },
            {
              'name': '日历',
              'target': '<p-calendar></p-calendar>',
              'desc': ''
            },
            {
              'name': '复选框',
              'target': '<p-checkbox ></p-checkbox>',
              'desc': ''
            },
            {
              'name': '下拉选择框',
              'target': '<p-dropdown></p-dropdown>',
              'desc': ''
            },
            {
              'name': '文本输入',
              'target': '<input type="text" pInputText/>',
              'desc': ''
            },
            {
              'name': '列表选择',
              'target': '<p-listbox></p-listbox>',
              'desc': ''
            },
            {
              'name': '下拉多选框',
              'target': '<p-multiSelect></p-multiSelect>',
              'desc': ''
            },
            {
              'name': '单选-列表',
              'target': '<p-radioButton></p-radioButton>',
              'desc': ''
            },
            {
              'name': '数字微调',
              'target': '<p-spinner></p-spinner>',
              'desc': ''
          },
          {
              'name': 'tab选择按钮列表',
              'target': '<p-selectButton></p-selectButton>',
              'desc': ''
          },
          {
              'name': '文件上传',
              'target': '<p-fileUpload name="myfile[]" url="./upload.php"></p-fileUpload>',
              'desc': ''
          }
        ];
  }

}
