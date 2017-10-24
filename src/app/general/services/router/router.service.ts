import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class RouterService {
    // 用于权限验证路由跳转路由跳转
    private verifyCB: Function = () => true;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        private _location: Location,
    ) { }

    /**
     * 获得当前路由
    */
    public get url(): string {
        return this.router.url;
    }

    /**
     * 路由跳转
     * @param url 要跳转的路由
     * @param params 需要传递的参数
     */
    public gotoPage(url: string, params: Object = {}): void {
        if(this.verifyCB()) {
            this.router.navigate([url], { queryParams: params });
        }
    }

    /**
     * 页面后退
     */
    public goBack(): void {
        if(this.verifyCB()) {
            this._location.back();
        }
    }

    /**
     * 通过回调获取当前路由参数
     * @param func 获取参数成功回调函数(obj)
     */
    public getParamsCallBack(func: Function): void {
        this.route.queryParams.subscribe(param => {
            func(param);
        });
    }

    /**
     * 获取当前路由参数快照
     */
    public getParamsSnapshot(): any {
        return this.route.snapshot.queryParams;
    }

    /**
     * 设置路由跳转时，权限验证函数，回调函数默认以及允许返回true，禁止跳转返回false
     */
    public setVerifyCallback(cb: Function):void {
        this.verifyCB = cb;
    }
}
