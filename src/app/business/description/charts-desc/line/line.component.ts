import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-line-desc',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss', '../charts-desc.component.scss', '../../description.common.scss']
})
export class LineComponent implements OnInit {
    // 折线图示例数据
    lineData: any = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 50, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 60],
                    fill: false,
                    borderColor: '#565656'
                },
                {
                    label: 'Third Dataset',
                    data: [48, 18, 60, 29, 36, 27, 70],
                    fill: false,
                    borderColor: '#ff00f0'
                }
            ]
        };

  // 折线图TS示例代码
  lineDemoCode: any = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-line-desc',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
    lineData: any = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 50, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#4bc0c0'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 60],
                        fill: false,
                        borderColor: '#565656'
                    },
                    {
                        label: 'Third Dataset',
                        data: [48, 18, 60, 29, 36, 27, 70],
                        fill: false,
                        borderColor: '#ff00f0'
                    }
                ]
        };

    constructor() { }

    ngOnInit() { }
}
  `;

  lineChartOptions: any = [
      {
        'name': 'label',
        'type': 'String',
        'description': '数据集的标签出现在图例和工具提示中'
      },
       {
        'name': 'xAxisID',
        'type': 'String',
        'description': '绘制此数据集的x轴的ID。 如果未指定，则默认为第一个找到的x轴的ID'
      },
       {
        'name': 'yAxisID',
        'type': 'String',
        'description': '绘制此数据集的y轴的ID。 如果未指定，则默认为第一个找到的y轴的ID'
      },
       {
        'name': 'backgroundColor',
        'type': 'Color/Color[]',
        'description': '柱状图背景填充颜色'
      },
       {
        'name': 'borderColor',
        'type': 'Color/Color[]',
        'description': '柱状图边框颜色'
      },
       {
        'name': 'borderWidth',
        'type': 'Number/Number[]',
        'description': '柱状图边框线宽度（以像素为单位）'
      },
       {
        'name': 'borderDash',
        'type': 'Number[]',
        'description': '破折号的长度和间距'
      },
       {
        'name': 'borderDashOffset',
        'type': 'Number',
        'description': '线条破折号偏移'
      },
       {
        'name': 'borderCapStyle',
        'type': 'String',
        'description': '帽子风格的线条'
      },
       {
        'name': 'borderJoinStyle',
        'type': 'String',
        'description': '线接合风格'
      },
    {
        'name': 'cubicInterpolationMode',
        'type': 'String',
        'description': '用于从离散数据点插入平滑曲线的算法，支持（default、monotone）'
      },
    {
        'name': 'fill',
        'type': 'Boolean/String',
        'description': '如何填写下面的区域'
      },
    {
        'name': 'lineTension',
        'type': 'Number',
        'description': '贝塞尔曲线张力线。 设置为0以绘制直线。 如果使用单调三次插值，则忽略此选项'
      },
    {
        'name': 'pointBackgroundColor',
        'type': 'Color/Color[]',
        'description': '点的填充颜色'
      },
    {
        'name': 'pointBorderColor',
        'type': 'Color/Color[]',
        'description': '点的边框颜色'
      },
    {
        'name': 'pointBorderWidth',
        'type': 'Number/Number[]',
        'description': '点边框的宽度（以像素为单位）'
      },
    {
        'name': 'pointRadius',
        'type': 'Number/Number[]',
        'description': '点形状的半径。 如果设置为0，则不渲染点'
      },
    {
        'name': 'pointStyle',
        'type': 'String/String[]/Image/Image[]',
        'description': '点的样式，可选（circle、cross、crossRot、dash、line、rect、rectRounded、rectRot、star、triangle）'
      },
    {
        'name': 'pointHitRadius',
        'type': 'Number/Number[]',
        'description': '反映鼠标事件的非显示点的像素大小'
      },
    {
        'name': 'pointHoverBackgroundColor',
        'type': 'Color/Color[]',
        'description': '鼠标滑过背景色'
      },
    {
        'name': 'pointHoverBorderColor',
        'type': 'Color/Color[]',
        'description': '鼠标滑过边框颜色'
      },
    {
        'name': 'pointHoverBorderWidth',
        'type': 'Number/Number[]',
        'description': '鼠标滑过边框线宽度'
      },
    {
        'name': 'pointHoverRadius',
        'type': 'Number/Number[]',
        'description': '鼠标滑过悬停点半径'
      },
    {
        'name': 'showLine',
        'type': 'Boolean',
        'description': '是否显示线'
      },
    {
        'name': 'spanGaps',
        'type': 'Boolean',
        'description': '如果为真，则将在无数据或零数据的点之间绘制行。 如果为false，则使用NaN数据的点将在行中创建一个中断'
      },
     {
        'name': 'steppedLine',
        'type': 'Boolean/String',
        'description': '是否显示为阶梯线，可选（false、true、before、after）'
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
