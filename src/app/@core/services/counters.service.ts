import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    
    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get('https://restcountries.eu/rest/v2/all');
    }
}
