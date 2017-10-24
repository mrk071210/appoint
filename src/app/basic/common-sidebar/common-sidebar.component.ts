import {
    Component,
    OnInit,
    ViewEncapsulation,
    Output,
    EventEmitter,
    Input
} from '@angular/core';
import { RouterService } from './../../general/services/router/router.service';
import { HttpService } from './../../general';
import { MenuItem } from 'primeng/primeng';

@Component({
    selector: 'kyee-common-sidebar',
    templateUrl: './common-sidebar.component.html',
    styleUrls: ['./common-sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CommonSidebarComponent implements OnInit {
    @Input() items: MenuItem[];
    constructor(
        private httpService: HttpService,
        private routerService: RouterService
    ) { }


    ngOnInit() {
        this.getMenus();
        // .then(menuItems => this.items = menuItems);
    }

    getMenus() {
        this.httpService.get('assets/dummy-data/menu-list.json', null, data => {
            this.items = data.data;
        });
        // .toPromise()
        // .then(res => <MenuItem[]>res.json().data)
        // .then(data => data);
    }
    /**
     * 点击事件
     * @param event 点击事件
     * @param item 点击的对象
     * @param index 一级菜单下标
     * @param childIndex 二级菜单下标
     * @param grandchildIndex 三级菜单下标
     */
    handleClick(event, item, index, childIndex, grandchildIndex) {
        // 如果该选项被禁止、则return
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        // 修改折叠、展开状态
        if (item && item.items && item.items.length > 0) {
            item.expanded = !item.expanded;
        }
        // console.log(this.items.filter((val, i) => i !== index ));
        // 确保一级标签只有一个是展开状态
        for (let i = 0; i < this.items.length; i++) {
            if (i !== index) {
                this.items[i].expanded = false;
            }
        }
        // 处理点击跳转事件
        if (!item.url) {
            event.preventDefault();
        } else {
            this.setItemActive(index, childIndex, grandchildIndex);
        }
        if (!item.routerLink) {
            event.preventDefault();
        } else {
            this.setItemActive(index, childIndex, grandchildIndex);
            this.routerService.gotoPage(item.routerLink);
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    }

    /**
     * 
     * @param index 一级菜单下标
     * @param childIndex 二级菜单下标
     * @param grandchildIndex 三级菜单下标
     */
    public setItemActive(index, childIndex, grandchildIndex) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].visible = false;
            if (this.items[i].items && this.items[i].items.length > 0) {
                for (let j = 0; j < this.items[i].items.length; j++) {
                    this.items[i].items[j].visible = false;
                    if (this.items[i].items[j].items && this.items[i].items[j].items.length > 0) {
                        for (let k = 0; k < this.items[i].items[j].items.length; k++) {
                            this.items[i].items[j].items[k].visible = false;
                        }
                    }
                }
            }
        }
        if (grandchildIndex || 0 == grandchildIndex) {
            this.items[index].items[childIndex].items[grandchildIndex].visible = true;
        } else if (childIndex || 0 == childIndex) {
            this.items[index].items[childIndex].visible = true;
        } else if (index || 0 == index) {
            this.items[index].visible = true;
        }
    }

}
