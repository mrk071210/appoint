import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-dropdown-desc',
  templateUrl: './dropdown.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  cities;
  selectedCity: any;
  cars;
  selectedCar: string;
  selectedCar2: string;
  attributes: any[];
  eventsList: any[];
  functionsList: any[];
  styleList: any[];
  tsDemo1: string;
  tsDemo2: string;
  tsDemo3: string;
  tsDemo4: string;
  constructor() {
    this.cities = [];
    this.cities.push({label: 'New York', value: { id: 1, name: 'New York', code: 'NY'}});
    this.cities.push({label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM'}});
    this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
    this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});

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

    // this.brands = [];
    // this.brands.push({label: 'drupal', value: 'drupal'});
    // this.brands.push({label: 'envira', value: 'envira'});
    // this.brands.push({label: 'css3', value: 'css3'});
    // this.brands.push({label: 'dribbble', value: 'dribbble'});
    // this.brands.push({label: 'foursquare', value: 'foursquare'});
    // this.brands.push({label: 'houzz', value: 'houzz'});
    // this.brands.push({label: 'glide', value: 'glide'});
    // this.brands.push({label: 'jsfiddle', value: 'jsfiddle'});
    // this.brands.push({label: 'pinterest', value: 'pinterest'});
    // this.brands.push({label: 'yelp', value: 'yelp'});

    this.attributes = [
      {
        'name': 'options',
        'type': 'array',
        'default': 'null',
        'description': '要显示的可选选项的一组选择项'
      },
      {
        'name': 'scrollHeight',
        'type': 'string',
        'default': '200px',
        'description': '视图的高度（以像素为单位），如果列表高度超过此值，则定义滚动条'
      },
      {
        'name': 'style',
        'type': 'string',
        'default': 'null',
        'description': '元素的内联样式。（注：如果自定义下拉选择框的高度，不可编辑类型的 dropdown 组件直接设置 line-height 属性即可；可编辑类型组件需同时设置 height 和 line-height 属性为相同值）'
      },
      {
        'name': 'panelStyle',
        'type': 'string',
        'default': 'null',
        'description': '遮罩面板元素的内嵌样式'
      },
      {
        'name': 'styleClass',
        'type': 'string',
        'default': 'null',
        'description': '元素的class样式'
      },
      {
        'name': 'panelStyleClass',
        'type': 'string',
        'default': 'null',
        'description': '遮罩面板元素的class样式'
      },
      {
        'name': 'filter',
        'type': 'boolean',
        'default': 'false',
        'description': '指定时，显示keyup后以一个输入字段过滤后的选项'
      },
      {
        'name': 'filterBy',
        'type': 'string',
        'default': 'null',
        'description': '启用筛选时，filterBy决定要搜索的字段（逗号分隔）'
      },
      {
        'name': 'filterPlaceholder',
        'type': 'string',
        'default': 'null',
        'description': '过滤器输入为空时显示占位符文本'
      },
      {
        'name': 'autoWidth',
        'type': 'boolean',
        'default': 'true',
        'description': '根据选项宽度计算宽度，自定义宽度设置为false'
      },
      {
        'name': 'required',
        'type': 'boolean',
        'default': 'false',
        'description': '设置在提交表单之前必须填写输入字段'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '禁用该组件'
      },
      {
        'name': 'editable',
        'type': 'boolean',
        'default': 'false',
        'description': '可以使用可编辑的输入字段输入自定义值而不是预定义选项'
      },
      {
        'name': 'appendTo',
        'type': 'any',
        'default': 'null',
        'description': '目标元素附加覆盖层，有效值为“body”或另一元素的本地ng模板变量'
      },
      {
        'name': 'tabindex',
        'type': 'number',
        'default': 'null',
        'description': '元素索引按制表顺序'
      },
      {
        'name': 'placeholder',
        'type': 'string',
        'default': 'null',
        'description': '未选择任何选项时显示的默认文本'
      },
      {
        'name': 'inputId',
        'type': 'string',
        'default': 'null',
        'description': '为下拉列表定义的标签设置焦点输入的唯一标识符'
      },
      {
        'name': 'dataKey',
        'type': 'string',
        'default': 'null',
        'description': '唯一标识选项中的值的属性'
      },
      {
        'name': 'lazy',
        'type': 'boolean',
        'default': 'true',
        'description': '启用时，当覆盖面板可见时，创建选项的dom'
      }
      ,
      {
        'name': 'autofocus',
        'type': 'boolean',
        'default': 'false',
        'description': '当出现时，它指定组件应该自动地集中在负载上。'
      }
      ,
      {
        'name': 'resetFilterOnHide',
        'type': 'boolean',
        'default': 'false',
        'description': '在隐藏下拉菜单时清除过滤器值。'
      }
    ];
    this.eventsList = [
      {
        'name': 'onChange',
        'parameters': 'event.originalEvent: 浏览器事件' + 'event.value: 当前选中值',
        'description': '当下拉列表的值更改时调用'
      },
      {
        'name': 'onFocus',
        'parameters': 'event: 浏览器事件',
        'description': '当下拉列表获取焦点时调用。'
      },
      {
        'name': 'onBlur',
        'parameters': 'event: 浏览器事件',
        'description': '当下拉列表失去焦点时调用'
      }
    ];
    this.functionsList = [
      {
        'name': 'resetFilter',
        'parameters': '-',
        'description': '重置筛选'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-dropdown',
        'element': '容器元素'
      },
      {
        'name': 'ui-dropdown-label',
        'element': '要显示所选选项的标签的元素'
      },
      {
        'name': 'ui-dropdown-trigger',
        'element': '图标元素'
      },
      {
        'name': 'ui-dropdown-panel',
        'element': '图标元素'
      },
      {
        'name': 'ui-dropdown-items-wrapper',
        'element': '项列表的包装元素'
      },
      {
        'name': 'ui-dropdown-items',
        'element': '项列表元素'
      },
      {
        'name': 'ui-dropdown-item',
        'element': '列表中的项元素'
      },
      {
        'name': 'ui-dropdown-filter-container',
        'element': '过滤器输入容器'
      },
      {
        'name': 'ui-dropdown-filter',
        'element': '过滤器元素'
      },
      {
        'name': 'ui-dropdown-open',
        'element': '覆盖层可见时的容器元素'
      }
    ];
   }

  ngOnInit() {
    this.selectedCar2 = 'BMW';
    this.tsDemo1 = `
export class DropdownComponent implements OnInit {
  cities;
  selectedCity: any;
  constructor() {
    this.cities = [];
    this.cities.push({label: 'New York', value: { id: 1, name: 'New York', code: 'NY'}});
    this.cities.push({label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM'}});
    this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
    this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});
  }

  ngOnInit() {
  }
}`;
    this.tsDemo2 = `
export class DropdownComponent implements OnInit {
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
  }
}`;
    this.tsDemo3 = `
export class DropdownComponent implements OnInit {
  cars;
  selectedCar2: string;
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
    this.selectedCar2 = 'BMW';
  }
}`;
    this.tsDemo4 = `
clearFilter(dropdown: Dropdown) {
  dropdown.resetFilter();
}`;
  }
}
