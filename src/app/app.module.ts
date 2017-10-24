import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpService, LoadingService, RouterService, StorageCacheService } from './general';

import * as echarts from 'echarts';
import { DeploymentConfig } from './config';

import { CommonHeaderComponent } from './basic/common-header';
import { LoginComponent, LoginVerifyService } from './basic/login';
import { PageNotFoundComponent } from './basic/page-not-found';
import { HomeComponent } from './basic/home';
import { MainComponent } from './basic/main/main.component';

const GENERAL_SERVICES = [
    HttpService,
    LoadingService,
    RouterService,
    StorageCacheService
];

@NgModule({
    declarations: [
        AppComponent,
        CommonHeaderComponent,
        PageNotFoundComponent,
        LoginComponent,
        HomeComponent,
        MainComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        ...GENERAL_SERVICES,
        LoginVerifyService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        private httpService: HttpService,
        private routerService: RouterService,
        private loginVerifyService: LoginVerifyService
    ) {
        this.initLimitVerify();
        this.initData();
    }

    /**
     * 初始化项目中用户权限验证
     */
    private initLimitVerify(): void {
        // 设置路由跳转校验函数
        this.routerService.setVerifyCallback(() => {
            let verify = this.loginVerifyService.routerVerify();
            return verify;
        });

        // 设置请求验证无权限以及失效处理函数
        this.httpService.setVerify(data => {
            let verify = this.loginVerifyService.httpVerify(data);
            return verify;
        });
    }

    /**
     * 初始化项目所需数据
     */
    private initData(): void {
        // 初始化echart地图数据
        for(let mapObj of DeploymentConfig.ECHARTS_MAPS) {
            this.httpService.get(mapObj.url, null, json => {
                echarts.registerMap(mapObj.name, json);
            });
        }
    }
}
