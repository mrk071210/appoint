import { Injectable } from '@angular/core';
import { RouterService } from '../../general';


@Injectable()
export class LoginVerifyService {

    constructor(private routerService: RouterService) { }

    /**
     * 请求权限、超时校验
     * @param data 
     */
    public httpVerify(data: any): boolean {
        // if(data['error']) {
        //   提示超时/错误

        //   return false;
        // }

        return true;
    }

    /**
     * 路由跳转权限校验
     */
    public routerVerify(): boolean {
        // if(!this.isLogin) {
        //     提示并跳回首页
        //     this.routerService.gotoPage('/login');
        //     return false;
        // }
        return true;
    }
    
}
