import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HerosService {
    
    constructor(private http: HttpClient) { }

    getHeros() {
        return this.http.get(`${baseUrl}/heros.json`);
    }
}
