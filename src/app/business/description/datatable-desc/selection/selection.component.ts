import { Component, OnInit } from '@angular/core';
import { GetDummyDataService } from './../get-dummy-data-service';

@Component({
  selector: 'kyee-selection-desc',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss', '../../description.common.scss']
})
export class SelectionComponent implements OnInit {

  msgs: any[];
  cars: any[];

  selectedCar1: any;

  selectedCar2: any;

  selectedCar3: any;

  selectedCars1: any[];

  selectedCars2: any[];

  selectedCars3: any[];

  constructor(private getDummyDataService: GetDummyDataService) { }

  ngOnInit() {
    this.getDummyDataService.getCarsSmall().then(cars => this.cars = cars);
  }

  onRowSelect(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand });
  }

  onRowUnselect(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand });
  }

}
