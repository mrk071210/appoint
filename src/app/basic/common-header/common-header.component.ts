import {
    Component,
    OnInit,
    ViewEncapsulation,
    Output,
    EventEmitter,
    Input
} from '@angular/core';

@Component({
    selector: 'kyee-common-header',
    templateUrl: './common-header.component.html',
    styleUrls: ['./common-header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CommonHeaderComponent implements OnInit {
    private _menuActive: boolean;
    showActiveFlag: number;
    @Output() menuActiveChange = new EventEmitter<boolean>();
    @Input()
    get menuActive() {
        return this._menuActive;
    }
    set menuActive(val) {
        this._menuActive = val;
        this.menuActiveChange.emit(this._menuActive);
    }
    constructor() { }

    ngOnInit(): void {
        this.showActiveFlag = 0;
    }

    /**
     * 点击呼出菜单按钮
     * @param event
     */
    onMenuButtonClick(event: Event): void {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }
}
