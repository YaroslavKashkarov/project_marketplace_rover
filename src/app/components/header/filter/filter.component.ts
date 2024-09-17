import { BrandsService } from './../../services/brands.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { IFilters } from '../../../../core/interfaces/filters.interface';
import {
  IRadiobuttonsInputOptions,
  RadiobuttonsInputGroupComponent,
} from './radiobuttons-input-group/radiobuttons-input-group.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessagesComponent } from '../../../validation/error-messages/error-messages.component';
import { DropdownComponent } from '../../common-components/dropdown/dropdown.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    RadiobuttonsInputGroupComponent,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ErrorMessagesComponent,
    DropdownComponent,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  isFilterClose: boolean = false;
  filterForm: FormGroup;

  @Input()
  filters: any;

  @Input()
  isMinimized = false;

  @Output()
  sendFilters = new EventEmitter();

  radioButtonsSettings: IRadiobuttonsInputOptions[] = [
    {
      title: 'By product state',
      filterName: 'state',
      options: [
        { key: 'New', value: 'new', selected: false },
        { key: 'Used', value: 'used', selected: false },
      ],
    },
    {
      title: 'By date',
      filterName: 'byDate',
      options: [
        { key: 'Today', value: 'today', selected: false },
        { key: 'Yesterday', value: 'yesterday', selected: false },
        { key: 'Last 7 days', value: 'last_7_days', selected: false },
        { key: 'Last 30 days', value: 'last_30_days', selected: false },
        { key: 'Last year', value: 'last_year', selected: false },
        { key: 'Ever', value: '', selected: false },
      ],
    },
  ];

  categoriesOptions: any[] = [
    { key: 'Bicycle', value: 'bicycle' },
    { key: 'Parts', value: 'parts' },
    { key: 'Accessories', value: 'accessories' },
    { key: 'Service', value: 'service' },
    { key: 'Clothes', value: 'clothes' },
  ];

  brandOptions: any[] = [];

  currentFilters: any = {};

  appliedFilters: IFilters;

  constructor(private brandsService: BrandsService) {
    this.filterForm = new FormGroup({
      priceFrom: new FormControl(''),
      priceTo: new FormControl(''),
      state: new FormControl(''),
      byDate: new FormControl(''),
      category: new FormControl(''),
      brand: new FormControl(''),
      negotiable: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.filterForm.get('category')!.valueChanges.subscribe((category) => {
      this.processCategoryField(category);
    });

    if (this.filters) {
      if (this.filters.category) {
        this.fetchBrands(this.filters.category);
      }
      this.filterForm.patchValue(this.filters);
    }
  }

  applyFilters() {
    this.appliedFilters = this.currentFilters;
    this.sendFilters.emit(this.appliedFilters);
  }

  fetchBrands(category: string) {
    this.brandsService.getBrandsByCategory(category.toLowerCase()).subscribe((res) => {
      res.forEach((brand) => {
        this.brandOptions.push({ key: brand, value: brand });
      });
      this.filterForm.get('brand')!.enable();
    });
  }

  processCategoryField(category: string) {
    const brandControl = this.filterForm.get('brand');

    if (category) {
      this.fetchBrands(category);
      brandControl!.reset();
    } else {
      brandControl!.disable();
      this.brandOptions = [];
    }
  }

  submit() {
    if (this.filterForm.value) {
      this.currentFilters = {};

      Object.keys(this.filterForm.controls).forEach((key) => {
        const control = this.filterForm.get(key);
        if (
          control &&
          control.value !== '' &&
          control.value !== null &&
          control.value !== undefined
        ) {
          this.currentFilters[key] = control.value;
        }
      });
      this.applyFilters();
    }
  }
}
