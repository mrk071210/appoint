import { GetDummyDataService } from './../get-dummy-data-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-sort-desc',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss', '../../description.common.scss']
})
export class SortComponent implements OnInit {

    cars1: any[];

    cars2: any[];
  constructor(private getDummyDataService:GetDummyDataService) { }

  ngOnInit() {
    this.getDummyDataService.getCarsSmall().then(cars => this.cars1 = cars);
    this.getDummyDataService.getCarsSmall().then(cars => this.cars2 = cars);
  }

}
