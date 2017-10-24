import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit
} from '@angular/core';

import { HttpService } from '../../general';
import * as echarts from 'echarts';

/**
 * ECharts 图表插件
 *  ex: <div kyeeEchart style='width: 1280px; height: 1024px;' [chartType]="aaa"></div>
 */
@Directive({
    selector: '[kyeeEcharts]'
})
export class EchartOptionDirective {
    @Input('options') options: any;
    constructor(private el: ElementRef, private httpService: HttpService) {}

    public ngOnInit(): void {
        let chartsDemo = echarts.init(this.el.nativeElement);
        chartsDemo.setOption(this.options);
    }
}