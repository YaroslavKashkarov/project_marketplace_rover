import { filter } from 'rxjs';
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IFilters } from '../../../../../core/interfaces/filters.interface';

@Component({
  selector: 'app-filter-dialog',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss'
})
export class FilterDialogComponent {

  appliedFilters: IFilters | null;

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    this.appliedFilters = data.filters
  }

  
  closeFilter(filters?: IFilters): void {
    this.dialogRef.close({
      filters: filters ?? this.appliedFilters
    })
  }
}
