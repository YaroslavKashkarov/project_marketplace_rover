import { IProduct } from '../../app/components/category/product.interface';

export interface IOrderProduct extends IProduct {
  sellerId: string;
  basketQuantity: number;
  quantity: number;
}
