import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../../../category/product/product.component";
import { IProduct } from '../../../category/product.interface';
import { ProductServiceService } from '../../../category/product-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-seller-item',
  standalone: true,
  imports: [ProductComponent, NgFor],
  templateUrl: './view-seller-item.component.html',
  styleUrl: './view-seller-item.component.scss'
})
export class ViewSellerItemComponent implements OnInit {

  constructor(public productService: ProductServiceService){}
  public products:IProduct[] = [];

  ngOnInit(): void {
    const filters = {
      pageSize: 3,
      page: 1
    }
    this.productService.getFilteredProducts(filters).subscribe(
      res => {
        this.products.push(...res.products);
      })
  }

}
