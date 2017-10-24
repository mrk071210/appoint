import { GetDummyDataService } from './../get-dummy-data-service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from './../../../../widgets';

@Component({
  selector: 'kyee-lazy-load-desc',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss', '../../description.common.scss']
})
export class LazyLoadComponent implements OnInit {

  datasource: any[];

  cars: any[];

  totalRecords: number;
  constructor(private getDummyDataService: GetDummyDataService) { }

  ngOnInit() {
    // datasource imitation
    this.getDummyDataService.getCarsLarge().then(cars => {
      this.datasource = cars;
      this.totalRecords = this.datasource.length;
      this.cars = this.datasource.slice(0, 10);
    });
  }

  loadCarsLazy(event: LazyLoadEvent) {
     // in a real application, make a remote request to load data using state metadata from event
     // event.first = First row offset
     // event.rows = Number of rows per page
     // event.sortField = Field name to sort with
     // event.sortOrder = Sort order as number, 1 for asc and -1 for dec
     // filters: FilterMetadata object having field as key and filter value, filter matchMode as value

     // imitate db connection over a network
    setTimeout(() => {
      if (this.datasource) {
        this.cars = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }
}
