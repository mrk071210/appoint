import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-polar-area-desc',
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.scss', '../charts-desc.component.scss', '../../description.common.scss']
})
export class PolarAreaComponent implements OnInit {

  polarAreaData: any = {
    datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    '#FF6384',
                    '#4BC0C0',
                    '#FFCE56',
                    '#E7E9ED',
                    '#36A2EB'
                ],
                label: 'My dataset'
            }],
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
    ]
};

polarAreaDemoCode: any = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-polar-area-desc',
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.scss', '../charts-desc.component.scss', '../../description.common.scss']
})
export class PolarAreaComponent implements OnInit {

  polarAreaData: any = {
    datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    '#FF6384',
                    '#4BC0C0',
                    '#FFCE56',
                    '#E7E9ED',
                    '#36A2EB'
                ],
                label: 'My dataset'
            }],
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
    ]
};

  constructor() { }

  ngOnInit() { }

}
`;

polarAreaChartOptions: any = [
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
      'description': '数据集中弧线的边框线宽度'
    },
    {
      'name': 'hoverBackgroundColor',
      'type': 'Color[]',
      'description': '鼠标滑过圆弧背景色'
    },
    {
      'name': 'hoverBorderColor',
      'type': 'Color[]',
      'description': '鼠标滑过圆弧边框颜色'
    },
    {
      'name': 'hoverBorderWidth',
      'type': 'Number[]',
      'description': '鼠标滑过边框线宽度'
    }
];

polarAreaChartConfigOptions: any = [
    {
      'name': 'startAngle',
      'type': 'Number',
      'defaultValue': '-0.5 * Math.PI',
      'description': '起始角度来绘制数据集中第一个项目的弧线'
    },
    {
      'name': 'animation.animateRotate',
      'type': 'Boolean',
      'defaultValue': 'true',
      'description': '如果为true，图表将使用旋转动画进行动画处理。 此属性位于options.animation对象中'
    },
    {
      'name': 'animation.animateScale',
      'type': 'Boolean',
      'defaultValue': 'true',
      'description': '如果为真，将从中心向外将图表缩放'
    }
];

  constructor() { }

  ngOnInit() { }

}
