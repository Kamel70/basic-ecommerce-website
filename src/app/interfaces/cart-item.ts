import { IProduct } from './iproduct';

export interface CartItem {
  id: number;
  Product: IProduct;
  quantity: number;
}
