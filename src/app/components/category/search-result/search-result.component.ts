import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { IProduct } from '../product.interface';
import { IFilters } from '../../../../core/interfaces/filters.interface';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent implements OnInit{

  category: 'Search result';
  products: IProduct[];
  productsToDisplay: number = 8;
  selectedSortOption: string = '';
  filters: any = {};

  constructor (
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.filters = {};
      
      params.keys.forEach(key => {
        this.filters[key] = params.get(key);
      });

      this.productService.getFilteredProducts(this.filters).subscribe(
        res => {
          this.products = res
        }
      );
    })
  }

  onMoreClick(): void {
    // Increase the number of items to display by a certain amount (e.g., 3 more items)
    // this.productsToDisplay += 4;
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
