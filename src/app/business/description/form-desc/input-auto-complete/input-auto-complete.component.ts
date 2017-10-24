import { HttpService } from './../../../../general';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-input-auto-complete-desc',
  templateUrl: './input-auto-complete.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './input-auto-complete.component.scss']
})
export class InputAutoCompleteComponent implements OnInit {
  country: any;
  filteredCountriesSingle: any[];
  // brands: string[] = ['drupal', 'envira', 'css3', 'dribbble', 'foursquare', 'houzz', 'glide', 'jsfiddle', 'pinterest', 'yelp'];
  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
  filteredBrands: any[];
  brand: string;
  countries: any[];
  filteredCountriesMultiple: any[];
  attributes: any[];
  eventsList: any[];
  styleList: any[];
  tsDemo1: string;
  tsDemo2: string;
  tsDemo3: string;
  explainTSDemo1: string;
  explainTSDemo2: string;
  explainTSDemo3: string;
  explainTSDemo4: string;
  constructor(private httpService: HttpService) {
    this.attributes = [
      {
        'name': 'suggestions',
        'type': 'array',
        'default': 'null',
        'description': '以数组列表显示'
      },
      {
        'name': 'field',
        'type': 'any',
        'default': 'null',
        'description': '控制列表对象的解析和显示'
      },
      {
        'name': 'scrollHeight',
        'type': 'string',
        'default': '200px',
        'description': '设置数组列表面板的最大高度'
      },
      {
        'name': 'dropdown',
        'type': 'boolean',
        'default': 'false',
        'description': '设置input输入框旁边的下拉选择图标是否显示'
      },
      {
        'name': 'multiple',
        'type': 'boolean',
        'default': 'false',
        'description': '设置是否可以选择多个值'
      },
      {
        'name': 'minLength',
        'type': 'number',
        'default': '1',
        'description': '设置搜索的最小字符数。'
      },
      {
        'name': 'delay',
        'type': 'number',
        'default': '300',
        'description': '设置查询之前等待的按键之间的延迟'
      },
      {
        'name': 'styleClass',
        'type': 'string',
        'default': 'null',
        'description': '设置组件的class样式'
      },
      {
        'name': 'inputStyleClass',
        'type': 'string',
        'default': 'null',
        'description': '设置input输入框的class样式'
      },
      {
        'name': 'inputId',
        'type': 'string',
        'default': 'null',
        'description': '设置input输入框的唯一标识id'
      },
      {
        'name': 'placeholder',
        'type': 'string',
        'default': 'null',
        'description': '设置input输入框的提示输入文本'
      },
      {
        'name': 'readonly',
        'type': 'boolean',
        'default': 'false',
        'description': '设置input输入框是否可以为只读模式'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '禁用该组件'
      },
      {
        'name': 'maxlength',
        'type': 'number',
        'default': 'null',
        'description': '输入字段允许的最大字符数'
      },
      {
        'name': 'size',
        'type': 'boolean',
        'default': 'false',
        'description': '输入字段的大小'
      },
      {
        'name': 'appendTo',
        'type': 'any',
        'default': 'null',
        'description': '目标元素附加覆盖层，有效值为“body”或另一元素的本地ng-template（模板变量）'
      },
      {
        'name': 'tabindex',
        'type': 'number',
        'default': 'null',
        'description': '设置在一个表中的索引'
      },
      {
        'name': 'dataKey',
        'type': 'string',
        'default': 'null',
        'description': '唯一标识选项中的值的属性'
      },
      {
        'name': 'autoHighlight',
        'type': 'boolean',
        'default': 'false',
        'description': '启用时，默认情况下突出显示列表中的第一个项目。'
      },
      {
        'name': 'type',
        'type': 'string',
        'default': 'text',
        'description': 'input输入的类型，默认为“文本”'
      },
      {
        'name': 'emptyMessage',
        'type': 'string',
        'default': 'null',
        'description': '当查询没有结果时显示的消息'
      },
      {
        'name': 'immutable',
        'type': 'boolean',
        'default': 'true',
        'description': '定义如何操纵选项数据'
      },
      {
        'name': 'required',
        'type': 'boolean',
        'default': 'false',
        'description': '当出现时，它指定在提交表单之前必须填写输入字段。'
      },
      {
        'name': 'forceSelection',
        'type': 'boolean',
        'default': 'false',
        'description': '当存在时，自动完成清除手动输入，如果不匹配的建议，只强制接受来自建议的值。'
      },
      {
        'name': 'dropdownMode',
        'type': 'string',
        'default': 'blank',
        'description': '指定行为下拉按钮。默认“空白”模式发送一个空字符串，“当前”模式发送输入值。'
      }
  ];
    this.eventsList = [
      {
        'name': 'completeMethod',
        'parameters': 'event.originalEvent: 浏览器事件' + '； ' + 'event.query: 检索完成后的值',
        'description': '检索数据结果后的回调方法'
      },
      {
        'name': 'onFocus',
        'parameters': 'event: 浏览器事件',
        'description': '当自动完成获取焦点时，调用'
      },
      {
        'name': 'onBlur',
        'parameters': 'event: 浏览器事件',
        'description': '自动完成失败时调用'
      },
      {
        'name': 'onSelect',
        'parameters': 'value: 当前选中值',
        'description': '选择检索数据时的调用'
      },
      {
        'name': 'onUnselect',
        'parameters': 'value: 多个检索数据结果中未选择的值',
        'description': '删除所选值时调用'
      },
      {
        'name': 'onDropdownClick',
        'parameters': 'event.originalEvent: 浏览器事件' + '； ' + 'event.query: input框内的当前输入值',
        'description': '单击下拉按钮时调用'
      },
      {
        'name': 'onClear',
        'parameters': 'event: 浏览器事件',
        'description': '当输入字段被清除时调用'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-autocomplete',
        'element': '适用容器元素'
      },
      {
        'name': 'ui-autocomplete-panel',
        'element': '检索数据面板'
      },
      {
        'name': 'ui-autocomplete-items',
        'element': '检索数据列表'
      },
      {
        'name': 'ui-autocomplete-item',
        'element': '检索数据列表项元素'
      },
      {
        'name': 'ui-autocomplete-token',
        'element': '多种模式下所选项目的元素'
      },
      {
        'name': 'ui-autocomplete-token-icon',
        'element': '在多种模式下关闭所选项目的图标元素'
      },
      {
        'name': 'ui-autocomplete-token-label',
        'element': '多种模式下所选项目的标签'
      },
      {
        'name': 'ui-autocomplete-loader',
        'element': '加载程序图标'
      }
    ];
  }
  filterCountrySingle(event) {
    let query = event.query;
    this.httpService.get('assets/dummy-data/countries.json', null, data => {
      this.filteredCountriesSingle = this.filterCountry(query, data.data);
    });
  }
  filterCountryMultiple(event) {
        let query = event.query;
        this.httpService.get('assets/dummy-data/countries.json', null, data => {
          this.filteredCountriesMultiple = this.filterCountry(query, data.data);
        });
    }
  filterCountry(query, countries: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }
  filterBrands(event) {
        this.filteredBrands = [];
        for (let i = 0; i < this.brands.length; i++) {
            let brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    }
    handleDropdownClick() {
        this.filteredBrands = [];
        setTimeout(() => {
            this.filteredBrands = this.brands;
        }, 100);
    }
  ngOnInit() {
    this.tsDemo1 = `
export class InputAutoCompleteComponent implements OnInit {
  country: any;
  filteredCountriesSingle: any[];
  constructor(private httpService: HttpService) { }
  filterCountrySingle(event) {
    let query = event.query;
    this.httpService.get('assets/dummy-data/countries.json', null, data => {
      this.filteredCountriesSingle = this.filterCountry(query, data.data);
    });
  }
  filterCountry(query, countries: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }
  ngOnInit() {
  }

}`;
  this.tsDemo2 = `
export class InputAutoCompleteComponent implements OnInit {
  brands: string[] = ['drupal', 'envira', 'css3', 'dribbble', 'foursquare', 'houzz', 'glide', 'jsfiddle', 'pinterest', 'yelp'];
  filteredBrands: any[];
  brand: string;
  constructor(private httpService: HttpService) { }
  filterBrands(event) {
        this.filteredBrands = [];
        for (let i = 0; i < this.brands.length; i++) {
            let brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    }
  handleDropdownClick() {
    this.filteredBrands = [];
    setTimeout(() => {
      this.filteredBrands = this.brands;
    }, 100);
  }
  ngOnInit() {
  }

}`;
  this.tsDemo3 = `
export class InputAutoCompleteComponent implements OnInit {
  countries: any[];
  filteredCountriesMultiple: any[];
  constructor(private httpService: HttpService) { }
  filterCountryMultiple(event) {
      let query = event.query;
      this.httpService.get('assets/dummy-data/countries.json', null, data => {
        this.filteredCountriesMultiple = this.filterCountry(query, data.data);
      });
  }
  filterCountry(query, countries: any[]):any[] {
      let filtered : any[] = [];
      for (let i = 0; i < countries.length; i++) {
          let country = countries[i];
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
              filtered.push(country);
          }
      }
      return filtered;
  }
  ngOnInit() {
  }

}`;
this.explainTSDemo1 = `
export class InputAutoCompleteComponent implements OnInit {
    text: string;
    results: string[];
    search(event) {
        this.httpService.get('assets/dummy-data/countries.json', null, data => {
            this.results = data;
        });
    }
}`;
this.explainTSDemo2 = `
export class InputAutoCompleteComponent implements OnInit {
  text: string;
  results: string[];
  search(event) {
      this.httpService.get('assets/dummy-data/countries.json', null, data => {
          this.results = data;
      });
  }
  handleDropdown(event) {
      //event.query = current value in input field
  }
}`;
this.explainTSDemo3 = `
export class InputAutoCompleteComponent implements OnInit {
  text: string[];
  results: string[];
  search(event) {
      this.httpService.get('assets/dummy-data/countries.json', null, data => {
          this.results = data;
      });
  }
}`;
this.explainTSDemo4 = `
export class InputAutoCompleteComponent implements OnInit {
  val: country;
  results: string[];
  search(event) {
      this.httpService.get('assets/dummy-data/countries.json', null, data => {
          this.results = data;
      });
  }
}`;
  }

}

