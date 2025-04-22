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
  cartProducts: CartItem[] = [];
  cartProductsSignal = signal<CartItem[]>(this.cartProducts);
  getProducts() {
    return this.http.get<IproductApi>(
      'https://dummyjson.com/products?limit=10&skip=20'
    );
  }
  getProductById(id: number) {
    return this.http.get<IProduct>(`https://dummyjson.com/products/${id}`);
  }

  addToCart(product: IProduct) {
    let existProduct = this.cartProducts.find((c) => c.id == product.id);
    if (existProduct) {
      existProduct.quantity++;
    } else {
      this.cartProducts.push({ id: product.id, Product: product, quantity: 1 });
    }
    this.saveCart();
    console.log(this.cartProducts);
  }
  removeFromCart(product: IProduct) {
    this.cartProducts = this.cartProducts.filter((c) => c.id != product.id);
    this.saveCart();
    console.log(this.cartProducts);
    console.log(this.cartProductsSignal());
    this.loadCart();
  }
  decreaseQuantity(product: IProduct) {
    let existProduct = this.cartProducts.find((c) => c.id == product.id);
    if (existProduct) {
      if (existProduct.quantity > 1) {
        existProduct.quantity--;
        this.saveCart();
        console.log(this.cartProducts);
      }
    }
  }

  loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartProducts = JSON.parse(savedCart);
      this.cartProductsSignal.set(this.cartProducts);
    }
  }
  saveCart() {
    this.cartProductsSignal.update(() => [...this.cartProducts]);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}
