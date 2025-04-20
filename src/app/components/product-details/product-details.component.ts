import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  service = inject(ProductService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  productId: any;
  product!: IProduct;
  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.service.getProductById(this.productId).subscribe((p) => {
        this.productId = this.route;
        this.product = p;
        console.log(this.product);
      });
    });
  }
}
