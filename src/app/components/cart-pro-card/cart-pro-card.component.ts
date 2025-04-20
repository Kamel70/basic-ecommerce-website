import { Component, input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-cart-pro-card',
  imports: [],
  templateUrl: './cart-pro-card.component.html',
  styleUrl: './cart-pro-card.component.css',
})
export class CartProCardComponent {
  quantity() {
    throw new Error('Method not implemented.');
  }
  updateQuantity($event: Event) {
    throw new Error('Method not implemented.');
  }
  increaseQuantity() {
    throw new Error('Method not implemented.');
  }
  calculateTotal(): number {
    throw new Error('Method not implemented.');
  }
  removeFromCart() {
    throw new Error('Method not implemented.');
  }
  product = input.required<IProduct>();
}
