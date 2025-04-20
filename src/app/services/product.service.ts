import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct, IproductApi } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  http = inject(HttpClient);
  // apiUrl = 'https://fakestoreapi.com/products';
  getProducts() {
    return this.http.get<IproductApi>(
      'https://dummyjson.com/products?limit=10&skip=20'
    );
  }
}
