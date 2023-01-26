export interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  id: string;
  isBlock: boolean;
  inCart?: boolean;
}
