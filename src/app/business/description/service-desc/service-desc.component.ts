import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kyee-service-desc',
    templateUrl: './service-desc.component.html',
    styleUrls: ['./service-desc.component.scss', '../description.common.scss']
})
export class ServiceDescComponent implements OnInit {
    properties: any[];
    constructor() { }

    ngOnInit() {
        this.properties = [
            {name: 'HttpService', description: 'HttpService用于处理http请求。'},
            {name: 'RouterService', description: 'RouterService用于控制页面间的路由跳转。'},
            {name: 'StorageCacheService', description: 'StorageCacheService用于处理本地存储相关操作。'},
            {name: 'KyeeUtils', description: 'KyeeUtils提供常用公共方法。'}
        ]
    }
}
