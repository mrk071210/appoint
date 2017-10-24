import { GetDummyDataService } from './../get-dummy-data-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-editable-desc',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss', '../../description.common.scss']
})
export class EditableComponent implements OnInit {

  cars: any[];
  brands: any[];
  constructor(private getDummyDataService: GetDummyDataService) { }

  ngOnInit() {
    this.getDummyDataService.getCarsSmall().then(cars => this.cars = cars);

    this.brands = [
      { label: 'Choose', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
  }

}
