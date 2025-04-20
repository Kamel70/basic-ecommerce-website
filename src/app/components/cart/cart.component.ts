import { AfterViewInit, Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';
import { CartProCardComponent } from '../cart-pro-card/cart-pro-card.component';

@Component({
  selector: 'app-cart',
  imports: [CartProCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.service.cartProducts);
  }
  service = inject(ProductService);
  products: IProduct[] = this.service.cartProducts;
}
