import { SortOptions } from './../../../../core/interfaces/sort-options';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { IProduct } from '../product.interface';
import { IFilters } from '../../../../core/interfaces/filters.interface';
import { FilterComponent } from '../../header/filter/filter.component';
import { LoaderComponent } from '../../common-components/loader/loader.component';
import { DropdownComponent } from '../../common-components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule, ProductComponent, FilterComponent, LoaderComponent, DropdownComponent, FormsModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent implements OnInit{

  category: 'Search result';
  products: IProduct[];
  productsToDisplay: number = 8;
  // selectedSortOption: SortOptions = this.sortOptions.by_newest; 
  selectedSortOption: string = 'by_newest';
  filters: any = {};
  isLoading: boolean = false;
  isSearchResultPage = false;

  sortingOptions: any[] = [
    { key: 'Recent', value: 'by_newest' },
    { key: 'Price up', value: 'by_price_asc' },
    { key: 'Price down', value: 'by_price_desc' },
  ]

  constructor (
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.filters = {
        sort: this.selectedSortOption,
      };

      params.keys.forEach(key => {
        this.filters[key] = params.get(key);
      });

      this.processData()
    })
  }

  applyFilters(filters: IFilters) {
    this.router.navigate(['home/search-result'], {queryParams: filters})
  }

  private processData(): void{
    this.isLoading = true;

    this.filters.sort = this.selectedSortOption;

    this.productService.getFilteredProducts(this.filters).subscribe(
      res => {
        this.products = res.products;
        this.isLoading = false;
      }
    );

  }

  sortProducts(sortOption: string): void{
    this.selectedSortOption = sortOption;
    this.processData()
  }

  onMoreClick(): void {
    // Increase the number of items to display by a certain amount (e.g., 3 more items)
    // this.productsToDisplay += 4;
  }

}
