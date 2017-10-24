import { GetDummyDataService } from './../get-dummy-data-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-resize-desc',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss', '../../description.common.scss']
})
export class ResizeComponent implements OnInit {

  cars: any[];
  constructor(private getDummyDataService:GetDummyDataService) { }

  ngOnInit() {
    this.getDummyDataService.getCarsSmall().then(cars => this.cars = cars);
  }

}
