import { Component, OnInit } from '@angular/core';
import { GetDummyDataService } from './../get-dummy-data-service';

@Component({
  selector: 'kyee-paginator-desc',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss', '../../description.common.scss']
})
export class PaginatorComponent implements OnInit {

  cars: any[];
  constructor(private getDummyDataService: GetDummyDataService) { }

  ngOnInit() {
    this.getDummyDataService.getCarsMedium().then(cars => this.cars = cars);
  }

}
