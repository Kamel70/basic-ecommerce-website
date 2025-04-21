import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IProduct, IproductApi } from '../interfaces/iproduct';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    this.loadCart();
  }
  http = inject(HttpClient);
  // apiUrl = 'https://fakestoreapi.com/products';
  cartProducts: IProduct[] = [];
  cartProductsSignal = signal(this.cartProducts);
  // private cartProducts: CartItem[] = [];
  // cartProductsSignal = signal<CartItem[]>([]);
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
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  removeFromCart(product: IProduct) {
    this.cartProducts.filter((p) => p.id !== product.id);
    this.cartProductsSignal.update(() => this.cartProducts);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.loadCart();
  }
  loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartProducts = JSON.parse(savedCart);
      this.cartProductsSignal.set(this.cartProducts);
    }
  }
}
