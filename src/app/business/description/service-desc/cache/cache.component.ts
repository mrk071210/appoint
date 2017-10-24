import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kyee-cache-desc',
    templateUrl: './cache.component.html',
    styleUrls: ['./cache.component.scss', '../../description.common.scss']
})
export class CacheComponent implements OnInit {
    setPageParams: any[];
    applyParams: any[];
    getParams: any[];
    getObjParams: any[];
    removekParams: any[];
    constructor() { }

    ngOnInit() {
        this.setPageParams = [
            {name: 'key', type: 'string', description: '在localStorage中的储存数据的键值。'},
            {name: 'value', type: 'any', description: '在localStorage中的储存的真实数据。'}
        ];

        this.applyParams = [
            {name: 'key', type: 'string', description: '在localStorage中的储存数据的键值。'},
            {name: 'attr', type: 'string', description: '在localStorage中的储存数据内部要变更的属性键值。'},
            {name: 'value', type: 'any', description: '在localStorage中的储存数据内部要变更的属性数据'}
        ];

        this.getParams = this.getObjParams = this.removekParams = [
            {name: 'key', type: 'string', description: '在localStorage中的储存数据的键值。'}
        ];
    }
}
