import { GetDummyDataService } from './../get-dummy-data-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-export-desc',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss', '../../description.common.scss']
})
export class ExportComponent implements OnInit {

  cars: any[];

  selectedCars: any[];
  
  constructor(private getDummyDataService: GetDummyDataService) { }

  ngOnInit() {
    this.getDummyDataService.getCarsSmall().then(cars => this.cars = cars);
  }
  
}
