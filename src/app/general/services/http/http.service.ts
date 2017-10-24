import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions,
    URLSearchParams,
    RequestOptionsArgs,
    RequestMethod
} from '@angular/http';

import { Subscription } from 'rxjs';

import { KyeeUtils } from '../../utils/kyee-utils';
import { DeploymentConfig } from '../../../config';
import { LoadingService } from './loading.service';

@Injectable()
export class HttpService {
    private defaultParams = {
        opVersion: DeploymentConfig.VERSION,
        serverUrl: DeploymentConfig.SERVER_URL
    };
    private verifyCB: Function = () => true;
    constructor(
        private _http: Http,
        private loadingService: LoadingService,
    ) { }

    /**
     * get请求-请求指定的页面信息，并返回实体主体
     * @param url 请求的url
     * @param paramMap 请求的参数
     * @param success 成功回调
     * @param error 失败回调
     */
    public get(url: string, paramMap: any = null, success: Function = (data) => {},
        error: Function = (msg) => {}
    ): Subscription {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Get,
            search: this.buildURLSearchParams(paramMap)
        }), success, error);
    }

    /**
     * post请求-向指定资源提交数据进行处理请求（例如提交表单或者上传文件），数据被包含在请求体中。
     * @param url 请求的url
     * @param body 数据体
     * @param success 成功回调
     * @param error 失败回调
     */
    public post(url: string, paramMap: any = null, success: Function = (data) => {},
        error: Function = (msg) => {}
    ): Subscription {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            body: paramMap,
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }), success, error);
    }

    /**
     * 表单请求
     * @param url 请求的url
     * @param formData 表单数据
     * @param success 成功回调
     * @param error 失败回调
     */
    public postFormData(url: string, paramMap: any = null, success: Function = (data) => {},
        error: Function = (msg) => {}
    ): Subscription {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            search: this.buildURLSearchParams(paramMap),
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }), success, error);
    }

    /**
     * 设置请求校验函数，入参为请求返回数据, 返回值默认为true，权限禁止返回值为false
     * @param cb 
     */
    public setVerify(cb: Function): void {
        this.verifyCB = cb;
    }

    /**
     * 将参数对象转为标准查询参数
    * @param paramMap
    * @returns {URLSearchParams}
    */
    private buildURLSearchParams(paramMap): URLSearchParams {
        let params = new URLSearchParams();

        if (!paramMap) {
            return params;
        }

        for (let key in paramMap) {
            if (paramMap.hasOwnProperty(key)) {
                let val = paramMap[key];

                if (val instanceof Date) {
                    val = KyeeUtils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
                }

                params.set(key, val);
            }
        }

        for (let key in this.defaultParams) {
            if (this.defaultParams.hasOwnProperty(key)) {
                let val = this.defaultParams[key];
                params.set(key, val);
            }
        }

        params.set('opVersion', this.defaultParams.opVersion); // 多版本对应
        return params;
    }

    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     * @returns {string}
     */
    private requestFailed(url: string, options: RequestOptionsArgs, err): string {
        let msg = '请求发生异常', status = err.status;

        if (status === 0) {
            msg = '请求失败，请求响应出错';
        } else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        } else if (status === 500) {
            msg = '请求失败，服务器出错，请稍后再试';
        } else {
            msg = '未知错误，请检查网络';
        }

        return msg;
    }

    /**
     * 所有请求（get、post、put、delete、options、head、patch）的统一出口
     * @param url 请求的url
     * @param options 请求的标准参数
     * @param success 成功回调
     * @param error 失败回调
     */
    private request(url: string, options: RequestOptionsArgs, success: Function, error: Function): Subscription {
        this.loadingService.loading(true);

        return this._http.request(url, options).subscribe(res => {
            this.loadingService.loading(false);
            let data = res.json();
            if(this.verifyCB(data)) {
                success(data);
            }
        }, err => {
            this.loadingService.loading(false);
            // 处理请求失败
            let msg = this.requestFailed(url, options, err);
            error(msg);
        });
    }
}
