import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  router = inject(Router);
  product = input.required<IProduct>();
  goToDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
}
