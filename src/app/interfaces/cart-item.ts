import { IProduct } from './iproduct';

export interface CartItem {
  Product: IProduct;
  quantity: number;
}
