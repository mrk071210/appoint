import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'kyee-button-desc',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss', '../../description.common.scss']
})
export class ButtonComponent implements OnInit {
    clicks: number = 0;
    properties: any[];
    constructor() { }

    ngOnInit() {
        this.properties = [
            {name: 'label', type: 'string', default: 'null', description: '按钮的文字。'},
            {name: 'icon', type: 'string', default: 'null', description: '图标名称。'},
            {name: 'iconPos', type: 'string', default: 'left', description: '图标的位置，有效值为“left”和“right”。'},
        ];
    }

    count() {
        this.clicks++;
    }

}
