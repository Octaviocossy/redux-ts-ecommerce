import { IProduct } from './product.model';

export interface IAppStore {
  product: IProductStore;
  general: IGeneralStore;
}

export interface IProductStore {
  products: IProduct[];
  isLoading: boolean;
}

export interface IGeneralStore {
  error: string | null;
}
