import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart-pro-card',
  imports: [],
  templateUrl: './cart-pro-card.component.html',
  styleUrl: './cart-pro-card.component.css',
})
export class CartProCardComponent {
  service = inject(ProductService);
  quantity() {
    console.log('Quantity:');
  }
  updateQuantity($event: Event) {
    console.log('Quantity:');
  }
  increaseQuantity() {
    console.log('Quantity:');
  }
  calculateTotal(): number {
    return 0;
  }
  removeFromCart(product: IProduct) {
    this.service.removeFromCart(product);
  }
  product = input.required<IProduct>();
}
