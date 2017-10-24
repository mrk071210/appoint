import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-progress-bar-desc',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss', '../../description.common.scss']
})
export class ProgressBarComponent implements OnInit {
    value: number = 0;
    msgs = [];
    properties: any[];

    constructor() { }

    ngOnInit() {
        this.properties = [
            {name:'value', type:'number', default:'null', description:'进度的当前值。'},
            {name:'showValue', type:'boolean', default:'true', description:'显示或隐藏进度条值。'},
            {name:'unit', type:'string', default:'%', description:'单位符号附加到数值后的值。'},
        ];

        let interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if(this.value >= 100) {
                this.value = 100;
                this.msgs = [{severity: 'info', summary: 'Success', detail: 'Process Completed'}];
                clearInterval(interval);
            }
        }, 2000);
    }
}
