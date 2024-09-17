import { IProduct } from '../../app/components/category/product.interface';

export interface IProductsResult {
  totalCount: number;
  products: IProduct[];
}
