import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-doughnut-desc',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss', '../charts-desc.component.scss', '../../description.common.scss']
})
export class DoughnutComponent implements OnInit {

  doughnutData: any = {
         labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
        };
  doughnutDemoCode: any = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-doughnut-desc',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {

  doughnutData: any = {
         labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
        };

    constructor() { }

    ngOnInit() { }
}
`;

  // 环形图数据集属性
  doughnutChartDataOptions: any = [
       {
        'name': 'label',
        'type': 'String',
        'description': '数据集的标签出现在图例和工具提示中'
       },
       {
        'name': 'backgroundColor',
        'type': 'Color[]',
        'description': '数据集中圆弧的填充颜色'
       },
       {
        'name': 'borderColor',
        'type': 'Color[]',
        'description': '数据集中弧线的边框颜色'
       },
       {
        'name': 'borderWidth',
        'type': 'Number[]',
        'description': '数据集中弧线的边框宽度'
       },
       {
        'name': 'hoverBackgroundColor',
        'type': 'Color[]',
        'description': '鼠标滑过圆弧的填充颜色'
       },
       {
        'name': 'hoverBorderColor',
        'type': 'Color[]',
        'description': '鼠标滑过圆弧的边框颜色'
       },
       {
        'name': 'hoverBorderWidth',
        'type': 'Number[]',
        'description': '鼠标滑过圆弧的边框线宽度'
       }
  ];

  // 环形图配置属性
  doughnutChartOptions: any = [
       {
        'name': 'cutoutPercentage',
        'type': 'Number',
        'deafultValue': '50 - for doughnut, 0 - for pie',
        'description': '从中间切出的图表的百分比'
       },
       {
        'name': 'rotation',
        'type': 'Number',
        'deafultValue': '-0.5 * Math.PI',
        'description': '起始角度来绘制弧线'
       },
       {
        'name': 'circumference',
        'type': 'Number',
        'deafultValue': '2 * Math.PI',
        'description': '允许圆弧覆盖范围'
       },
       {
        'name': 'animation.animateRotate',
        'type': 'Boolean',
        'deafultValue': 'true',
        'description': '如果为true，图表将使用旋转动画进行动画处理。 此属性位于options.animation对象中'
       },
       {
        'name': 'animation.animateScale',
        'type': 'Boolean',
        'deafultValue': 'false',
        'description': '如果为真，将从中心向外将图表缩放'
       }
  ];

  constructor() { }

  ngOnInit() {
  }

}
