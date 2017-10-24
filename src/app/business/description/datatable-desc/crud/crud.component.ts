import { GetDummyDataService } from './../get-dummy-data-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-crud-desc',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss', '../../description.common.scss']
})
export class CrudComponent implements OnInit {

  displayDialog: boolean;

  car: any = new PrimeCar();

  selectedCar: any;

  newCar: boolean;

  cars: any[];

  constructor(private getDummyDataService: GetDummyDataService) { }

  ngOnInit() {
    this.getDummyDataService.getCarsSmall().then(cars => this.cars = cars);
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.findSelectedCarIndex()] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.findSelectedCarIndex();
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: any): any {
    let car = new PrimeCar();
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }

}

class PrimeCar {

    constructor(public vin?, public year?, public brand?, public color?) {}
}
