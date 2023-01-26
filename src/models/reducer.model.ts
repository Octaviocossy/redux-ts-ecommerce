import { ICartProduct } from './cart.model';
import { IProduct } from './product.model';

export interface IAppStore {
  product: IProductStore;
  general: IGeneralStore;
  cart: ICartStore;
}

export interface IProductStore {
  products: IProduct[];
  isLoading: boolean;
}

export interface IGeneralStore {
  error: string | null;
}

export interface ICartStore {
  products: ICartProduct[];
}
