import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/iproduct';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productService = inject(ProductService);
  products: IProduct[] = [];
  constructor() {
    this.productService.getProducts().subscribe((p) => {
      this.products = p.products;
      console.log(this.products);
    });
  }
}
