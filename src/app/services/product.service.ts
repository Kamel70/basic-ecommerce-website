import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IProduct, IproductApi } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  http = inject(HttpClient);
  // apiUrl = 'https://fakestoreapi.com/products';
  cartProducts: IProduct[] = [];
  cartProductsSignal = signal(this.cartProducts);
  getProducts() {
    return this.http.get<IproductApi>(
      'https://dummyjson.com/products?limit=10&skip=20'
    );
  }
  getProductById(id: number) {
    return this.http.get<IProduct>(`https://dummyjson.com/products/${id}`);
  }

  addToCart(product: IProduct) {
    this.cartProducts.push(product);
    this.cartProductsSignal.set(this.cartProducts);
  }
  removeFromCart(product: IProduct) {
    this.cartProducts.filter((p) => p.id !== product.id);
    this.cartProductsSignal.set(this.cartProducts);
  }
}
