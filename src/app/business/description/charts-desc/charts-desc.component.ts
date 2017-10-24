import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-charts-desc',
  templateUrl: './charts-desc.component.html',
  styleUrls: ['./charts-desc.component.scss', '../description.common.scss']
})
export class ChartsDescComponent implements OnInit {

  chartsOptionS; // 图表属性数据
  chartsMethodS; // 图表方法数据
  lineChartDemoCode; // 折线图示例js代码
  optionDemoCode; // option属性示例代码

  constructor() { }

  ngOnInit() {
    /**
     * 图表属性数据
     */
    this.chartsOptionS = [
      {
        'name': 'type',
        'type': 'string',
        'defaultValue': 'null',
        'description': '图表类型'
      },
      {
          'name': 'data',
          'type': 'any',
          'defaultValue': 'null',
          'description': '要显示的数据'
      },
      {
          'name': 'options',
          'type': 'any',
          'defaultValue': 'null',
          'description': '自定义图表的选项'
      },
      {
          'name': 'width',
          'type': 'string',
          'defaultValue': 'null',
          'description': '非响应模式下图表的宽度'
      },
      {
          'name': 'height',
          'type': 'string',
          'defaultValue': 'null',
          'description': '非响应模式下图表的高度'
      },
      {
          'name': 'onDataSelect',
          'type': 'function',
          'defaultValue': 'null',
          'description': '单击图表上的元素时，执行回调函数'
      }
  ];

/**
 * 图表方法数据
 */
  this.chartsMethodS = [
      {
        'name': 'refresh',
        'params': '-',
        'description': '用新数据重新绘制图形'
      },
       {
        'name': 'reinit',
        'params': '-',
        'description': '先销毁之前图形，然后重新创建'
      },
       {
        'name': 'generateLegend',
        'params': '-',
        'description': '返回该图表对应图例的HTML字符串，图例从选项中的legendCallback生成'
      }
  ];

  /**
   * 折线图示例js代码
   */
this.lineChartDemoCode = `
export class LineChartDemo {
      data: any;
      constructor() {
          this.data = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      label: 'First Dataset',
                      data: [65, 59, 80, 81, 56, 55, 40]
                  },
                  {
                      label: 'Second Dataset',
                      data: [28, 48, 40, 19, 86, 27, 90]
                  }
              ]
          }
      }
  }`;

/**
 * option属性示例代码
 */
this.optionDemoCode = `
export class LineChartDemo {
        data: any;
        options: any;
        constructor() {
            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            }
            this.options = {
                title: {
                    display: true,
                    text: 'My Title',
                    fontSize: 16
                },
                legend: {
                    position: 'bottom'
                }
            };
        }
    }`;
  }
}
