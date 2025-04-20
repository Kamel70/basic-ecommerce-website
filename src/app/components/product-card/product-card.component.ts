import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  service = inject(ProductService);
  router = inject(Router);
  product = input.required<IProduct>();
  goToDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
  addToCart(product: IProduct) {
    this.service.addToCart(product);
    console.log('Product added to cart:', product);
    console.log(this.service.cartProducts);
  }
}
