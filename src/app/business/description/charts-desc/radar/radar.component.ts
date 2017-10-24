import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-radar-desc',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss', '../charts-desc.component.scss', '../../description.common.scss']
})
export class RadarComponent implements OnInit {

  radarData: any = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
          }
      ]
  };

  radarDemoCode: any = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-radar-desc',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

  radarData: any = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
          }
      ]
  }

    constructor() { }

    ngOnInit() { }
}
`;

radarChartOptions: any = [
    {
      'name': 'label',
      'type': 'String',
      'description': '数据集的标签出现在图例和工具提示中'
    },
    {
      'name': 'backgroundColor',
      'type': 'Color/Color[]',
      'description': '填充线框内背景颜色'
    },
     {
      'name': 'borderColor',
      'type': 'Color/Color[]',
      'description': '边框线颜色'
    },
    {
      'name': 'borderWidth',
      'type': 'Number/Number[]',
      'description': '边框线宽度'
    },
     {
      'name': 'borderDash',
      'type': 'Number[]',
      'description': '雷达边框线的长度和间距'
    },
    {
      'name': 'borderDashOffset',
      'type': 'Number',
      'description': '线框偏移'
    },
     {
      'name': 'borderCapStyle',
      'type': 'String',
      'description': '帽子风格的边框线'
    },
    {
      'name': 'borderJoinStyle',
      'type': 'Color[]',
      'description': '边框线接合风格'
    },
     {
      'name': 'fill',
      'type': 'Boolean/String',
      'description': '如何填充区域'
    },
    {
      'name': 'lineTension',
      'type': 'Number',
      'description': '贝塞尔曲线张力线,设为0画直线'
    },
     {
      'name': 'pointBackgroundColor',
      'type': 'Color/Color[]',
      'description': '圆点背景色'
    },
    {
      'name': 'pointBorderColor',
      'type': 'Color/Color[]',
      'description': '圆点边框线颜色'
    },
     {
      'name': 'pointBorderWidth',
      'type': 'Number/Number[]',
      'description': '圆点边框线宽度'
    },
    {
      'name': 'pointRadius',
      'type': 'Number/Number[]',
      'description': '点形状的半径， 如果设置为0，则不渲染点'
    },
     {
      'name': 'pointStyle',
      'type': 'String/String[]/Image/Image[]',
      'description': '圆点样式'
    },
    {
      'name': 'pointHitRadius',
      'type': 'Number/Number[]',
      'description': '反映鼠标事件的非显示点的像素大小'
    },
     {
      'name': 'pointHoverBackgroundColor',
      'type': 'Color/Color[]',
      'description': '鼠标滑过圆点背景色'
    },
    {
      'name': 'pointHoverBorderColor',
      'type': 'Color/Color[]',
      'description': '鼠标滑过圆点边框色'
    },
     {
      'name': 'pointHoverBorderWidth',
      'type': 'Number/Number[]',
      'description': '鼠标滑过圆点边框线宽度'
    },
    {
      'name': 'pointHoverRadius',
      'type': 'Number/Number[]',
      'description': '鼠标滑过圆点半径'
    }
];

  constructor() { }

  ngOnInit() {
  }

}
