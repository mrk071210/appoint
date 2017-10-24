import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-multi-select-desc',
  templateUrl: './multi-select.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  cars;
  selectedCars: string[] = [];
  attributes: any[];
  eventsList: any[];
  styleList: any[];
  tsDemo: string;
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

    this.attributes = [
      {
        'name': 'options',
        'type': 'array',
        'default': 'null',
        'description': '要显示的可选选项的一组选择项'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '禁用该元素'
      },
      {
        'name': 'filter',
        'type': 'boolean',
        'default': 'true',
        'description': '指定时，显示一个输入字段以过滤keyup上的项目'
      },
      {
        'name': 'defaultLabel',
        'type': 'string',
        'default': 'Choose',
        'description': '当没有选择时显示的标签'
      },
      {
        'name': 'appendTo',
        'type': 'any',
        'default': 'null',
        'description': '目标元素附加覆盖层，有效值为“body”或另一元素的本地ng模板变量'
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
        'name': 'scrollHeight',
        'type': 'string',
        'default': '200px',
        'description': '视图的高度（以像素为单位），如果列表高度超过此值，则定义滚动条'
      },
      {
        'name': 'overlayVisible',
        'type': 'boolean',
        'default': 'false',
        'description': '设置选项面板的可见性'
      },
      {
        'name': 'tabindex',
        'type': 'number',
        'default': 'null',
        'description': '元素索引按制表顺序'
      },
      {
        'name': 'dataKey',
        'type': 'string',
        'default': 'null',
        'description': '唯一标识选项中的值的属性'
      },
      {
        'name': 'inputId',
        'type': 'string',
        'default': 'null',
        'description': '为组件标签设置焦点输入的唯一标识符'
      },
      {
        'name': 'displaySelectedLabel',
        'type': 'boolean',
        'default': 'true',
        'description': '设置显示所选项标签元素的标签或使用默认标签'
      },
      {
        'name': 'maxSelectedLabels',
        'type': 'number',
        'default': '3',
        'description': '决定最多显示多少所选项标签'
      },
      {
        'name': 'selectedItemsLabel',
        'type': 'string',
        'default': '{0} items selected',
        'description': '超过最大选定标签后显示的label'
      }
    ];
     this.eventsList = [
      {
        'name': 'onChange',
        'parameters': 'event.originalEvent: 浏览器事件' + 'event.value: 当前选中值',
        'description': '值更改时调用'
      },
      {
        'name': 'onBlur',
        'parameters': 'event.originalEvent: 浏览器事件' + 'event.value: 点击所选项',
        'description': '当多重选择失去焦点时调用'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-multiselect',
        'element': '容器元素'
      },
      {
        'name': 'ui-multiselect-label-container',
        'element': '显示所选项标签的容器。'
      },
      {
        'name': 'ui-multiselect-trigger',
        'element': '下拉按钮'
      },
      {
        'name': 'ui-multiselect-filter-container',
        'element': '过滤器输入容器'
      },
      {
        'name': 'ui-multiselect-panel',
        'element': '多选项数据的遮罩面板。'
      },
      {
        'name': 'ui-multiselect-items',
        'element': '列表容器的项'
      },
      {
        'name': 'ui-multiselect-item',
        'element': '列表中的项'
      }
    ];
   }

  ngOnInit() {
    this.tsDemo = `
export class MultiSelectComponent implements OnInit {
  cars;
  selectedCars: string[] = [];
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

}
    `;
  }

}
