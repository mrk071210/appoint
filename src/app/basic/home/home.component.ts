import { Component, OnInit } from '@angular/core';
import { RouterService } from './../../general/services/router/router.service';

@Component({
  selector: 'kyee-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgUrl = 'assets/home.jpg';
  // imgTopUrl='url(assets/frame/images/banner-min.png)';
  imgTopUrl = 'assets/frame/images/banner-min.png';
  imgWordUrl01='assets/frame/images/banner-word01.png';
  imgWordUrl02='assets/frame/images/banner-word02.png';
  titleImgUrl = 'assets/frame/images/title-min.png';
  featuresImgUrl1 = 'assets/frame/images/pic01-min.png';
  featuresImgUrl2 = 'assets/frame/images/pic02-min.png';
  featuresImgUrl3 = 'assets/frame/images/pic03-min.png';
  featuresImgUrl4 = 'assets/frame/images/pic04-min.png';
  featuresImgUrl5 = 'assets/frame/images/pic05-min.png';
  featuresImgUrl6 = 'assets/frame/images/pic06-min.png';
  introductionImgUrl = 'assets/frame/images/big_left-min.png';
  step1ImgUrl = 'assets/frame/images/left01-min.png';
  step2ImgUrl = 'assets/frame/images/left02-min.png';
  step3ImgUrl = 'assets/frame/images/left03-min.png';
  readyImgUrl = 'assets/frame/images/ready-min.png';
  requestImgUrl = '';
  constructor(
    public routerService: RouterService
  ) { }

  ngOnInit() {
    this.requestImgUrl = 'assets/frame/images/button-min.png';
  }
  public onkey() {
    this.requestImgUrl = 'assets/frame/images/button_press-min.png';
  }
  public start() {
    this.routerService.gotoPage('../business/description');
  }

}
