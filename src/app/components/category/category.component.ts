import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "./product.interface";
import {ProductServiceService} from "./product-service.service";
import {ProductComponent} from "./product/product.component";
// import {DropdownDirective} from "../../shared/dropdown.directive"; original
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-category',
  standalone: true,

  imports: [CommonModule, ProductComponent, MatInputModule, MatSelectModule, FormsModule],
  // imports: [CommonModule, ProductComponent, DropdownDirective, MatInputModule, MatSelectModule, FormsModule], original
  imports: [CommonModule, ProductComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  constructor (
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  category: string;
<<<<<<< HEAD
  products: Product []
  productsToDisplay: number = 4;
=======
  products: IProduct[];
  productsToDisplay: number = 8;
>>>>>>> cdf968178e56af61a194cd8eabd09336587dc656
  selectedSortOption: string = '';
  // showSortOptions = true; я додавав

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.category = category;
      }
<<<<<<< HEAD
      this.products = this.productService.getProductsByCategory(this.category)
      console.log(this.products.length)
      console.log(this.productsToDisplay)
      if (this.productsToDisplay>=this.products.length) {
        console.log('Hello')
      }
=======

      const filter = {
        category: this.category
      }

      this.productService.getFilteredProducts(filter).subscribe(
        res => {
          this.products = res.products
        }
      );
>>>>>>> cdf968178e56af61a194cd8eabd09336587dc656
    });

  }

  onMoreClick(): void {
    // Increase the number of items to display by a certain amount (e.g., 3 more items)
<<<<<<< HEAD
    this.productsToDisplay += 4;
    if (this.productsToDisplay>=this.products.length) {
      console.log('Hello')
    }
    // console.log(this.productsToDisplay)
=======
    // this.productsToDisplay += 4;
>>>>>>> cdf968178e56af61a194cd8eabd09336587dc656
  }

  selectOption(sortOption: string) {
    // console.log(sortOption);
    // this.selectedSortOption = sortOption;
  }

  public sortProductsDesc(): void {
    // this.products = this.products.sort((a, b) => a.price - b.price);
  }

  public sortProductsAsc() {
  //   this.products = this.products.sort((a, b) => b.price - a.price);
  // }  public sortProductDate() {
  //   this.products = this.products.sort((a, b) => b.date_publication.getDate() - a.date_publication.getDate());
  }

  onSortChange($event: Event) {
    // const selectedValue = ($event.target as HTMLSelectElement).value;

    // if (selectedValue === 'Price Up') {
    //   this.sortProductsDesc();
    // } else if (selectedValue === 'Price Down') {
    //   this.sortProductsAsc();
    // }else if(selectedValue === 'Recent'){
    //   this.sortProductDate()
    // }
  }
}
