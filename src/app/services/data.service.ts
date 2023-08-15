import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public url = 'https://localhost:44364/api';

    constructor(private http: HttpClient) { }

    public composeHeaders() {
        const token = localStorage.getItem('petshop.token');
        if (token !== null) {
            const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
            return headers;
        }
        return undefined;
    }

    getProducts() {
        return this.http.get<Product[]>(`${this.url}/Products`);
    }

    authenticate(data: any) {
        return this.http.post<boolean>(`${this.url}/Accounts/Authenticate`, data);
    }

    refreshToken() {

        return this.http.post<boolean>(`${this.url}/Accounts/RefreshToken`,
            null,
            { headers: this.composeHeaders() }
        );
    }
}