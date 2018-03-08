import { Component, ViewEncapsulation ,OnInit} from '@angular/core';
import { HttpService} from 'portalface/services';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-appoint',
    templateUrl: './appoint.component.html',
    styleUrls: [
        './appoint.component.scss',
        '../../styles/common.scss'
        ],
    encapsulation: ViewEncapsulation.None
})
export class AppointComponent implements OnInit{
    constructor(private httpService: HttpService) { }
    ngOnInit() {
        this.httpService.get(
            url:"retretretre",
            paramMap:{
                data:111,
                name:"213123"
            },
            success:Function=(data)=>{

            },
            error:Function=(mag)=>{

            },
            extraConfig:{

            }
        ):Subscription
    }
}