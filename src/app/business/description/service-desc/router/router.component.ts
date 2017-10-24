import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kyee-router-desc',
    templateUrl: './router.component.html',
    styleUrls: ['./router.component.scss', '../../description.common.scss']
})
export class RouterComponent implements OnInit {
    gotoPageParams: any[];
    getParamsCallBackParams: any[];
    constructor() { }

    ngOnInit() {
        this.gotoPageParams = [
            {name: 'url', type: 'string', description: '要跳转的路由路径。'},
            {name: 'params', type: 'any', description: '需要传递的key-value路由参数。'}
        ];

        this.getParamsCallBackParams = [
            {name: 'func', type: 'Function', description: '获取参数成功回调函数，入参为参数对象。'}
        ];
    }
}
