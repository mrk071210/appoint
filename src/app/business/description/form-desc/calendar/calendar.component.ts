import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-calendar-desc',
  templateUrl: './calendar.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  date1: Date;
  date2: Date;
  date3: Date;
  date4: Date;
  date5: Date;
  minDate: Date;
  maxDate: Date;
  invalidDates: Array<Date>;
  formatList: any[];
  attributes: any[];
  eventsList: any[];
  styleList: any[];
  tsDemo1: string;
  tsDemo2: string;
  tsDemo3: string;
  tsDemo4: string;
  tsDemo5: string;
  localizationTsDemo: string;
  constructor() {
    this.formatList = [
      {
        'type': 'd',
        'description': '某月中的一天（无前导零）'
      },
      {
        'type': 'dd',
        'description': '某月中的一天（固定两位数）'
      },
      {
        'type': 'o',
        'description': '某年中的一天（无前导零）'
      },
      {
        'type': 'oo',
        'description': '某年中的一天（三位数）'
      },
      {
        'type': 'D',
        'description': '星期的简称'
      },
      {
        'type': 'DD',
        'description': '星期的全称'
      },
      {
        'type': 'm',
        'description': '某年中的某月（无前导零）'
      },
      {
        'type': 'mm',
        'description': '某年中的某月（固定两位数）'
      },
      {
        'type': 'M',
        'description': '月的简称'
      },
      {
        'type': 'MM',
        'description': '月的全称'
      },
      {
        'type': 'y',
        'description': '年份（无前导零）'
      },
      {
        'type': 'yy',
        'description': '年份（固定两位数）'
      },
      {
        'type': '@',
        'description': 'Unix时间戳（自01/01/1970以来的ms）'
      }
    ];
    this.attributes = [
      {
        'name': 'defaultDate',
        'type': 'Date',
        'default': 'null',
        'description': '设置首次打开时的默认日期'
      },
      {
        'name': 'style',
        'type': 'string',
        'default': 'null',
        'description': '组件的内联样式'
      },
      {
        'name': 'styleClass',
        'type': 'string',
        'default': 'null',
        'description': '组件的class样式'
      },
      {
        'name': 'inputStyle',
        'type': 'string',
        'default': 'null',
        'description': 'input输入框的内联样式'
      },
      {
        'name': 'inputStyleClass',
        'type': 'string',
        'default': 'null',
        'description': 'input输入框的class样式'
      },
      {
        'name': 'inputId',
        'type': 'string',
        'default': 'null',
        'description': '为一个组件获焦时匹配一个唯一id'
      },
      {
        'name': 'placeholder',
        'type': 'string',
        'default': 'null',
        'description': '输入框的提示输入文本'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '设置禁用组件'
      },
      {
        'name': 'dateFormat',
        'type': 'string',
        'default': 'mm/dd/yy',
        'description': '设置日期格式'
      },
      {
        'name': 'inline',
        'type': 'boolean',
        'default': 'false',
        'description': '启用后，将日历显示为内联。默认显示弹出模式'
      },
      {
        'name': 'showOtherMonths',
        'type': 'boolean',
        'default': 'true',
        'description': '设置是否在当月的开始或结束时显示其他月份的日期（不可选）'
      },
      {
        'name': 'selectOtherMonths',
        'type': 'boolean',
        'default': 'false',
        'description': '设置是否可选择在本月份之前或之后显示的其他月份的天数'
      },
      {
        'name': 'showIcon',
        'type': 'boolean',
        'default': 'false',
        'description': '设置是否在输入旁边显示带有图标的按钮'
      },
      {
        'name': 'showOnFocus',
        'type': 'boolean',
        'default': 'true',
        'description': '禁用时，输入焦点不会显示datepicker'
      },
      {
        'name': 'icon',
        'type': 'string',
        'default': 'fa-calendar',
        'description': '日历按钮的图标'
      },
      {
        'name': 'appendTo',
        'type': 'any',
        'default': 'null',
        'description': '目标元素附加覆盖层，有效值为“body”或另一元素的本地ng模板变量'
      },
      {
        'name': 'readonlyInput',
        'type': 'boolean',
        'default': 'null',
        'description': '设置是否启用键盘手动输入日期'
      },
      {
        'name': 'minDate',
        'type': 'Date',
        'default': 'null',
        'description': '最小可选日期'
      },
      {
        'name': 'maxDate',
        'type': 'Date',
        'default': 'null',
        'description': '最大可选日期'
      },
      {
        'name': 'disabledDates',
        'type': 'Array<Date>',
        'default': 'null',
        'description': '设置一个数组日期是否禁用（不可选）'
      },
      {
        'name': 'disabledDays',
        'type': 'Array<number>',
        'default': 'null',
        'description': '设置阵列形工作日数字应禁用（不可选）'
      },
      {
        'name': 'monthNavigator',
        'type': 'boolean',
        'default': 'false',
        'description': '是否应将该月份呈现为下拉列表而不是文本'
      },
      {
        'name': 'yearNavigator',
        'type': 'boolean',
        'default': 'false',
        'description': '是否应该将年份呈现为下拉列表而不是文本'
      },
      {
        'name': 'yearRange',
        'type': 'string',
        'default': 'null',
        'description': '设置下拉日历显示的可选的年份范围用(nnnn:nnnn) 的格式如：(2000:2020)'
      },
      {
        'name': 'showTime',
        'type': 'boolean',
        'default': 'false',
        'description': '是否显示timepicker'
      },
      {
        'name': 'hourFormat',
        'type': 'string',
        'default': '24',
        'description': '设置12或24小时格式'
      },
      {
        'name': 'locale',
        'type': 'object',
        'default': 'null',
        'description': '具有日历的区域配置属性的对象'
      },
      {
        'name': 'timeOnly',
        'type': 'boolean',
        'default': 'false',
        'description': '是否仅显示时间戳'
      },
      {
        'name': 'dataType',
        'type': 'string',
        'default': 'date',
        'description': '回显到ngModel的值的类型'
      },
      {
        'name': 'required',
        'type': 'boolean',
        'default': 'false',
        'description': '设置在提交表单之前必须填写输入字段'
      },
      {
        'name': 'tabindex',
        'type': 'number',
        'default': 'null',
        'description': '设置在表格中的元素索引'
      },
      {
        'name': 'showSeconds',
        'type': 'boolean',
        'default': 'false',
        'description': '是否显示时间选择器中的秒数'
      },
      {
        'name': 'stepHour',
        'type': 'number',
        'default': '1',
        'description': '每次改变小时数'
      },
      {
        'name': 'stepMinute',
        'type': 'number',
        'default': '1',
        'description': '每次改变分钟数'
      },
      {
        'name': 'stepSecond',
        'type': 'number',
        'default': '1',
        'description': '每次改变秒数'
      },
      {
        'name': 'utc',
        'type': 'boolean',
        'default': '	false',
        'description': '是否将选择日期转换为UTC'
      }
    ];
    this.eventsList = [
      {
        'name': 'onSelect',
        'parameters': 'value: 当前选中值',
        'description': '选择日期时调用'
      },
      {
        'name': 'onBlur',
        'parameters': 'event: 失焦事件',
        'description': 'input输入失焦时调用'
      },
      {
        'name': 'onFocus',
        'parameters': 'event: 获焦事件',
        'description': 'input输入获焦时调用'
      },
      {
        'name': 'onClose',
        'parameters': 'event: 关闭事件',
        'description': '日期面板关闭时调用'
      },
      {
        'name': 'onInput',
        'parameters': '	event: 输入事件',
        'description': '当输入字段正在键入时调用'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-calendar',
        'description': '包装输入元素的容器的样式'
      },
      {
        'name': 'ui-inputtext',
        'description': '输入元素的样式'
      }
    ];
  }

  ngOnInit() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];

    this.tsDemo1 = `
export class CalendarComponent implements OnInit {
  date1: Date;
  constructor() { }
  ngOnInit() {
  }

}`;
    this.tsDemo2 = `
export class CalendarComponent implements OnInit {
  date2: Date;
  constructor() { }
  ngOnInit() {
  }

}`;
    this.tsDemo3 = `
export class CalendarComponent implements OnInit {
  date3: Date;
  constructor() { }
  ngOnInit() {
  }

}`;
    this.tsDemo4 = `
export class CalendarComponent implements OnInit {
  date4: Date;
  minDate: Date;
  maxDate: Date;
  constructor() { }
  ngOnInit() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
  }

}`;
    this.tsDemo5 = `
export class CalendarComponent implements OnInit {
  date5: Date;
  invalidDates: Array&lt;Date&gt;;
  constructor() { }
  ngOnInit() {
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

}`;
this.localizationTsDemo = `
export class CalendarComponent implements OnInit {
    en: any;
    ngOnInit() {
        this.en = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
            monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        };
    }
}
`;
  }

}
