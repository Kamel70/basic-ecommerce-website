import { AfterViewInit, Component, computed, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';
import { CartProCardComponent } from '../cart-pro-card/cart-pro-card.component';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-cart',
  imports: [CartProCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  service = inject(ProductService);
  products = computed(() => this.service.cartProductsSignal());
}
