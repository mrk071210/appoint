import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kyee-http-desc',
    templateUrl: './http.component.html',
    styleUrls: ['./http.component.scss', '../../description.common.scss']
})
export class HttpComponent implements OnInit {
    getParams: any[];
    postParams: any[];
    postFormParams: any[];
    constructor() { }

    ngOnInit() {
        this.getParams = [
            {name: 'url', type: 'string', description: '请求的url。'},
            {name: 'paramMap', type: 'any', description: '请求携带的参数，以json格式的对象体现。'},
            {name: 'success', type: 'Function', description: '请求成功回调，入参为返回结果数据。'},
            {name: 'error', type: 'Function', description: '请求失败回调，入参为错误详细信息。'},
            {name: 'extraConfig', type: 'object', description: '请求的额外配置信息，非必须。'}
        ];

        this.postParams = this.postFormParams = this.getParams;
    }
}
