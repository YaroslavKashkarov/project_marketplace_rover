import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IFilters } from '../../../../core/interfaces/filters.interface';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  isFilterClose: boolean = false;

  currentFilters: IFilters = {
    category: 'bicycle',
    state: 'new',
    priceFrom: 1000,
    priceTo: 1500
  }

  appliedFilters: IFilters

  constructor(public dialogRef: MatDialogRef<FilterComponent>){}

  applyFilters(){
    this.appliedFilters = this.currentFilters;
    this.closeFilter();
  }

  closeFilter(): void {
    this.dialogRef.close({
      filters: this.appliedFilters
    })
  }
}
