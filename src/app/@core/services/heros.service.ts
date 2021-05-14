import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HerosService {
    url = "assets/data/heros.json";
    constructor(private http: HttpClient) { }

    getHeros() {
        return this.http.get(this.url);
    }
}
