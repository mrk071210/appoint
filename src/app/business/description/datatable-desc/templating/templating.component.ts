import { GetDummyDataService } from './../get-dummy-data-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-templating-desc',
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.scss', '../../description.common.scss']
})
export class TemplatingComponent implements OnInit {

  cars: any[];
  constructor(
    private getDummyDataService: GetDummyDataService
  ) { }

  ngOnInit() {
    this.getDummyDataService.getCarsSmall().then(cars => this.cars = cars);
  }

}
