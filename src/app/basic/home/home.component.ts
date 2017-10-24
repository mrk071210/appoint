import { Component, OnInit } from '@angular/core';
import { RouterService } from './../../general/services/router/router.service';

@Component({
  selector: 'kyee-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgUrl = 'assets/home.jpg';
  // imgTopUrl='url(assets/img/banner-min.png)';
  imgTopUrl = 'assets/img/banner-min.png';
  imgWordUrl01 = 'assets/img/banner-word01.png';
  imgWordUrl02 = 'assets/img/banner-word02.png';
  titleImgUrl = 'assets/img/title-min.png';
  featuresImgUrl1 = 'assets/img/pic01-min.png';
  featuresImgUrl2 = 'assets/img/pic02-min.png';
  featuresImgUrl3 = 'assets/img/pic03-min.png';
  featuresImgUrl4 = 'assets/img/pic04-min.png';
  featuresImgUrl5 = 'assets/img/pic05-min.png';
  featuresImgUrl6 = 'assets/img/pic06-min.png';
  introductionImgUrl = 'assets/img/big_left-min.png';
  step1ImgUrl = 'assets/img/left01-min.png';
  step2ImgUrl = 'assets/img/left02-min.png';
  step3ImgUrl = 'assets/img/left03-min.png';
  readyImgUrl = 'assets/img/ready-min.png';
  requestImgUrl = '';
  constructor(
    public routerService: RouterService
  ) { }

  ngOnInit() {
    this.requestImgUrl = 'assets/img/button-min.png';
  }
  public onkey() {
    this.requestImgUrl = 'assets/img/button_press-min.png';
  }
  public start() {
    this.routerService.gotoPage('../business/description');
  }

}
