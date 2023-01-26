import { IProduct } from './product.model';

export interface ICartProduct {
  product: IProduct;
  count: number;
}
