import { GetDummyDataService } from './../get-dummy-data-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-row-group-desc',
  templateUrl: './row-group.component.html',
  styleUrls: ['./row-group.component.scss', '../../description.common.scss']
})
export class RowGroupComponent implements OnInit {

  cars1: any[];

  cars2: any[];

  cars3: any[];

  constructor(private getDummyDataService: GetDummyDataService) { }

  ngOnInit() {
    this.getDummyDataService.getCarsMedium().then(cars => this.cars1 = cars);
    this.getDummyDataService.getCarsMedium().then(cars => this.cars2 = cars);
    this.getDummyDataService.getCarsMedium().then(cars => this.cars3 = cars);
  }

  calculateGroupTotal(brand: string) {
    let total = 0;
    if (this.cars1) {
      for (let car of this.cars1) {
        if (car.brand === brand) {
          total += car.price;
        }
      }
    }

    return total;
  }

}
