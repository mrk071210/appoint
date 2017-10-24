import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetDummyDataService {
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('assets/dummy-data/cars-small.json')
                    .toPromise()
                    .then(res => res.json().data)
                    .then(data => data );
    }

    getCarsMedium() {
        return this.http.get('assets/dummy-data/cars-medium.json')
                    .toPromise()
                    .then(res => res.json().data)
                    .then(data => data );
    }

    getCarsLarge() {
        return this.http.get('assets/dummy-data/cars-large.json')
                    .toPromise()
                    .then(res => res.json().data)
                    .then(data => data );
    }
}