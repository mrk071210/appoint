import { Component, OnInit } from '@angular/core';
import { GetDummyDataService } from './../get-dummy-data-service';

@Component({
  selector: 'kyee-filter-desc',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss', '../../description.common.scss']
})
export class FilterComponent implements OnInit {

  cars: any[];
  brands: any[];
  colors: any[];

  constructor(private getDummyDataService:GetDummyDataService) { }

  ngOnInit() {
    this.getDummyDataService.getCarsMedium().then(cars => this.cars = cars);

        this.brands = [];
        this.brands.push({label: 'All Brands', value: null});
        this.brands.push({label: 'Audi', value: 'Audi'});
        this.brands.push({label: 'BMW', value: 'BMW'});
        this.brands.push({label: 'Fiat', value: 'Fiat'});
        this.brands.push({label: 'Honda', value: 'Honda'});
        this.brands.push({label: 'Jaguar', value: 'Jaguar'});
        this.brands.push({label: 'Mercedes', value: 'Mercedes'});
        this.brands.push({label: 'Renault', value: 'Renault'});
        this.brands.push({label: 'VW', value: 'VW'});
        this.brands.push({label: 'Volvo', value: 'Volvo'});

        this.colors = [];
        this.colors.push({label: 'White', value: 'White'});
        this.colors.push({label: 'Green', value: 'Green'});
        this.colors.push({label: 'Silver', value: 'Silver'});
        this.colors.push({label: 'Black', value: 'Black'});
        this.colors.push({label: 'Red', value: 'Red'});
        this.colors.push({label: 'Maroon', value: 'Maroon'});
        this.colors.push({label: 'Brown', value: 'Brown'});
        this.colors.push({label: 'Orange', value: 'Orange'});
        this.colors.push({label: 'Blue', value: 'Blue'});
  }

}
