import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    url = "assets/data/countries.json";

    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get(this.url);
    }
}
