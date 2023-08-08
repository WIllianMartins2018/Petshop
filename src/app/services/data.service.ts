import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public url = 'https://localhost:44364/api';

    constructor (private http: HttpClient) {}

    getProducts() {
        return this.http.get<Product[]>(`${this.url}/Products`);
    }

    authenticate(cpf: string, password: string) {
        return this.http.post<boolean>(`${this.url}/Accounts/Authenticate`,cpf);
    }
}