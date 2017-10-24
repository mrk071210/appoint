import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-list-box-desc',
  templateUrl: './list-box.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './list-box.component.scss']
})
export class ListBoxComponent implements OnInit {
  cities;
  selectedCity: string;
  selectedCities: string[];
  cars;
  selectedCar: string;
  attributes: any[];
  eventsList: any[];
  styleList: any[];
  tsDemo1: string;
  tsDemo2: string;
  tsDemo3: string;
  constructor() {
    this.cities = [];
    this.cities.push({label: 'New York', value: 'New York'});
    this.cities.push({label: 'Rome', value: 'Rome'});
    this.cities.push({label: 'London', value: 'London'});
    this.cities.push({label: 'Istanbul', value: 'Istanbul'});
    this.cities.push({label: 'Paris', value: 'Paris'});

    this.cars = [];
    this.cars.push({label: 'Audi', value: 'Audi'});
    this.cars.push({label: 'BMW', value: 'BMW'});
    this.cars.push({label: 'Fiat', value: 'Fiat'});
    this.cars.push({label: 'Ford', value: 'Ford'});
    this.cars.push({label: 'Honda', value: 'Honda'});
    this.cars.push({label: 'Jaguar', value: 'Jaguar'});
    this.cars.push({label: 'Mercedes', value: 'Mercedes'});
    this.cars.push({label: 'Renault', value: 'Renault'});
    this.cars.push({label: 'VW', value: 'VW'});
    this.cars.push({label: 'Volvo', value: 'Volvo'});

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
        'description': '指定时，允许选择多个值'
      },
      {
        'name': 'checkbox',
        'type': 'boolean',
        'default': 'false',
        'description': '指定时，允许选中带有复选框的项目'
      },
      {
        'name': 'filter',
        'type': 'boolean',
        'default': 'false',
        'description': '指定时，在头部显示过滤器输入'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '禁用该元素'
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
      },
      {
        'name': 'metaKeySelection',
        'type': 'boolean',
        'default': 'true',
        'description': '定义如何选择多个项目，当需要按下metaKey来选择或取消选择项目时，并且设置为每个项目的错误选择可以单独切换。 触摸启用的设备，metaKeySelection将自动关闭'
      },
      {
        'name': 'dataKey',
        'type': 'string',
        'default': 'null',
        'description': '唯一标识选项中的值的属性'
      }
    ];
     this.eventsList = [
      {
        'name': 'onChange',
        'parameters': 'event.originalEvent: 浏览器事件' + 'event.value: 单值或所选值的数组',
        'description': 'listbox的值更改时调用'
      },
      {
        'name': 'onDblClick',
        'parameters': 'event.originalEvent: 浏览器事件' + 'event.value: 点击所选项',
        'description': '当双击项目时调用'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-listbox',
        'element': '容器元素'
      },
      {
        'name': 'ui-listbox-list',
        'element': '列表容器'
      },
      {
        'name': 'ui-listbox-item',
        'element': '列表中的项'
      },
      {
        'name': 'ui-listbox-header',
        'element': '标题元素'
      },
      {
        'name': 'ui-listbox-filter-container',
        'element': '标题中过滤器输入的容器'
      }
    ];
   }

  ngOnInit() {
    this.selectedCar = 'BMW';

    this.tsDemo1 = `
export class ListBoxComponent implements OnInit {
  cities;
  selectedCity: string;
  constructor() {
    this.cities = [];
    this.cities.push({label: 'New York', value: 'New York'});
    this.cities.push({label: 'Rome', value: 'Rome'});
    this.cities.push({label: 'London', value: 'London'});
    this.cities.push({label: 'Istanbul', value: 'Istanbul'});
    this.cities.push({label: 'Paris', value: 'Paris'});
   }

  ngOnInit() {

  }

}`;
this.tsDemo2 = `
export class ListBoxComponent implements OnInit {
  cities;
  selectedCity: string;
  selectedCities: string[];
  constructor() {
    this.cities = [];
    this.cities.push({label: 'New York', value: 'New York'});
    this.cities.push({label: 'Rome', value: 'Rome'});
    this.cities.push({label: 'London', value: 'London'});
    this.cities.push({label: 'Istanbul', value: 'Istanbul'});
    this.cities.push({label: 'Paris', value: 'Paris'});
   }

  ngOnInit() {

  }

}`;

this.tsDemo3 = `
export class ListBoxComponent implements OnInit {
  cars;
  selectedCar: string;
  constructor() {
    this.cars = [];
    this.cars.push({label: 'Audi', value: 'Audi'});
    this.cars.push({label: 'BMW', value: 'BMW'});
    this.cars.push({label: 'Fiat', value: 'Fiat'});
    this.cars.push({label: 'Ford', value: 'Ford'});
    this.cars.push({label: 'Honda', value: 'Honda'});
    this.cars.push({label: 'Jaguar', value: 'Jaguar'});
    this.cars.push({label: 'Mercedes', value: 'Mercedes'});
    this.cars.push({label: 'Renault', value: 'Renault'});
    this.cars.push({label: 'VW', value: 'VW'});
    this.cars.push({label: 'Volvo', value: 'Volvo'});
   }

  ngOnInit() {
    this.selectedCar = 'BMW';
  }

}`;
  }

}
