import {Component, OnInit, Renderer2} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "./product.interface";
import {ProductServiceService} from "./product-service.service";
import {ProductComponent} from "./product/product.component";
import {FormsModule} from "@angular/forms";
import { DropdownComponent } from '../common-components/dropdown/dropdown.component';
import { LoaderComponent } from '../common-components/loader/loader.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductComponent, DropdownComponent, LoaderComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService,
    private renderer: Renderer2
  ) {
    this.filters = {
      category: this.route.snapshot.queryParams['category'],
      sort: 'by_newest'
    };
  }

  filters: {
    category: string,
    sort: string
  };
  products: IProduct[] = [];
  totalCount: number;
  productsToDisplay: number = 8;
  page: number = 1;
  isLoading: boolean = false;
  showMoreButton: boolean = true;
  scrollPosition: number = 0;

  sortingOptions: any[] = [
    { key: 'Recent', value: 'by_newest' },
    { key: 'Price up', value: 'by_price_asc' },
    { key: 'Price down', value: 'by_price_desc' },
  ]
  selectedSortOption: string = '';


  ngOnInit(): void {
    
    this.router.navigate(['home/category'], {queryParams: this.filters})
    

    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.products = [];
        this.page = 1;
        this.filters.category = category;
      
      }

      const sortOption = params['sort'];
      if (sortOption) {
        this.filters.sort = sortOption;
      }

      this.processData(true);
    });

  }

  private processData(initialLoad = false) {


    this.isLoading = true;

    this.filters = {... this.filters, ...{
      pageSize: this.productsToDisplay,
      page: this.page
    }}

    this.productService.getFilteredProducts(this.filters).subscribe(
      res => {
        console.log(this.scrollPosition)

        this.products.push(...res.products);
        this.totalCount = res.totalCount;
        this.isLoading = false;

        this.showMoreButton = this.totalCount > this.products.length;

        if (!initialLoad) {
          setTimeout(() => {
            window.scrollTo({
              top: this.scrollPosition,
              left: 0
            });
          }, 0);

        }
      },
    );
  }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event: any) {
  //   console.log(window.scrollY);
  //   this.scrollPosition = window.scrollY;
  // }

  onMoreClick(): void {
    this.scrollPosition = window.scrollY;

    this.page ++;
    this.processData()
  }


  public sortProducts(sortOption: string): void {
    this.filters.sort = sortOption;
    this.products = [];
    this.page = 1;
    this.processData(true);
   
  }

}
