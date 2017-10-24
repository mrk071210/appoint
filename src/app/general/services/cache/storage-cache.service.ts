import { Injectable } from '@angular/core';

@Injectable()
export class StorageCacheService {

  constructor() { }
    /**
     * 设置值
     *
     * @param key
     * @param value
     */
    set(key: string, value: any): void {
        let serializeObj = {
            value : value,
            timestamp : new Date().getTime()
        };

        localStorage.setItem(key, JSON.stringify(serializeObj));
    }

    /**
     * 属性变更
     * <br/>
     * 1.拓展属性（例如 timestamp 等）将会自动更新；
     * 2.仅在值为 json 类型时可使用，
     * 例如：
     * {
     *   key : info,
     *   value : {
     *     name : string,
     *     age : integer
     *   }
     * }，
     * 属性动态添加或修改可使用：
     * apply(key, attr, value)
     *
     * @param key
     * @param attr
     * @param value
     */
    apply(key: string, attr: string, value: any): void {
        let obj = this.getObj(key);

        if(obj != null) {
            obj.value[attr] = value;
            this.set(key, obj.value);
        }
    }

    /**
     * 获取值
     *
     * @param key
     * @returns {*|$value|s}
     */
    get(key: string): any {
        let serializeObj = localStorage.getItem(key);

        if(serializeObj != null) {
            return JSON.parse(serializeObj).value;
        }
        return null;
    }

    /**
     * 获取值得完整信息
     *
     * @param key
     * @returns {any}
     */
    getObj(key: string): any {
        let serializeObj = localStorage.getItem(key);

        if(serializeObj != null) {
            return JSON.parse(serializeObj);
        }

        return null;
    }

    /**
     * 移除元素
     *
     * @param key
     */
    remove(key: string): void {
        localStorage.removeItem(key);
    }

    /**
     * 清空所有值
     */
    clear(): void {
        localStorage.clear();
    }
}
