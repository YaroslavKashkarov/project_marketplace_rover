import { ProductServiceService } from './../../category/product-service.service';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounce, interval, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HighlightKeywordsPipe } from '../../../pipes/highlight-keywords.pipe';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [CommonModule, OverlayModule, FormsModule, ReactiveFormsModule, HighlightKeywordsPipe],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent implements OnInit{

  searchInput = new FormControl('');
  scrollStrategy: ScrollStrategy;
  filters: any = {};
  keywords: string;
  isExpanded: boolean = false;
  options: string[];

  constructor(
    private readonly sso: ScrollStrategyOptions, 
    private productService: ProductServiceService,
    private router: Router,
    public dialog: MatDialog, 
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) {
    this.scrollStrategy = sso.reposition();
  }

  ngOnInit(): void {
    this.searchInput.valueChanges
    .pipe(
      tap(() => this.isExpanded = false),
      debounce((v) => interval(1000))
    )
    
    .subscribe(value => {
      
      const keywords = value?.toString();

      if (keywords){
        this.keywords = keywords;
        this.productService.getProductTitlesByKeyword(this.keywords).subscribe(
          res => {
            this.options = res;
            this.isExpanded = true;
          }
        )
      } else {
        this.options = []
      }
    });

    this.route.queryParamMap.subscribe(params => {
      this.filters = {};

      if (params.keys){
        params.keys.forEach(key => {
          this.filters[key] = key === 'negotiable' ? Boolean(params.get(key)) : params.get(key);
        });
      }
    })
  }

  onOptionSelect(option: string){
    this.filters = {
      title: option,
      sort: 'by_newest'
    }
    this.searchInput.patchValue(option);
    this.router.navigate(['home/search-result'], {queryParams: this.filters});
    this.isExpanded = false;
  }

  onBlur() {
    setTimeout(() => {
      this.isExpanded = false;
    }, 200); 
  }

  openFilter(event: Event): void {
	  this.dialogService.openFilterDialog(this.filters);
  }

}
