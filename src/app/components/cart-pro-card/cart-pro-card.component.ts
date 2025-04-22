import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-cart-pro-card',
  imports: [],
  templateUrl: './cart-pro-card.component.html',
  styleUrl: './cart-pro-card.component.css',
})
export class CartProCardComponent {
  service = inject(ProductService);
  quantity(quantity: number): number {
    return quantity;
  }
  increaseQuantity(product: IProduct) {
    this.service.addToCart(product);
  }
  decreaseQuantity(product: IProduct) {
    this.service.decreaseQuantity(product);
  }
  calculateTotal(quantity: number, price: number): number {
    return quantity * price;
  }
  removeFromCart(product: IProduct) {
    this.service.removeFromCart(product);
  }
  product = input.required<CartItem>();
}
