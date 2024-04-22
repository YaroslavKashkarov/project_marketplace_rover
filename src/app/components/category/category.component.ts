import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {Product} from "./product";
import {ProductServiceService} from "./product-service.service";
import {ProductComponent} from "./product/product.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {
  }

  category: string;
  products: Product [] | null
  productsToDisplay: number = 8;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.category = category
      }
      this.products = this.productService.getProductsByCategory(this.category)
      console.log('Category:', category);
      console.log('Products:', this.products);
      console.log(this.products);
      // Use the retrieved category parameter as needed
    });

  }

  onMoreClick(): void {
    // Increase the number of items to display by a certain amount (e.g., 3 more items)
    this.productsToDisplay += 4;
  }
}
