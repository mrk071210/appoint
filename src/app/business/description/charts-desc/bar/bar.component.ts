import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-bar-desc',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss', '../charts-desc.component.scss', '../../description.common.scss']
})
export class BarComponent implements OnInit {

    barOptions: any = {
        legend: {
            position: 'top'
        }
    };
    hideLegendOptions: any = {
        legend: {
            display: false
        }
    };
   // 柱状图示例数据
    barData: any = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
    };
    //隐藏图例的柱状图示例数据
    hideLegendBarData: any = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: '',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    // 柱状图TS示例代码
    barDemoCode: any = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-bar-desc',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

    barOptions: any = {
        legend: {
            position: 'top'
        }
    };
    hideLegendOptions: any = {
        legend: {
            display: false
        }
    };
    barData: any = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
    };
    hideLegendBarData: any = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: '',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    constructor() { }

    ngOnInit() { }
}

`;

// 图表属性
barChartOptions: any = [
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
        'name': 'borderSkipped',
        'type': 'String',
        'description': '指定跳过绘制的边框,可选值有：top、right、bottom、left'
      },
       {
        'name': 'hoverBackgroundColor',
        'type': 'Color/Color[]',
        'description': '鼠标滑过背景色'
      },
       {
        'name': 'hoverBorderColor',
        'type': 'Color/Color[]',
        'description': '鼠标滑过边框色'
      },
       {
        'name': 'hoverBorderWidth',
        'type': 'Number/Number[]',
        'description': '鼠标滑过边框线宽度'
      }
  ];

    constructor() {
    }

    ngOnInit() {

    }

}
