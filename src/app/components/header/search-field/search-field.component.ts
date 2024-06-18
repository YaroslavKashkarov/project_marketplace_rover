
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent {
  scrollStrategy: ScrollStrategy;
  filters: any = {};
  isExpanded: boolean = false;
  
  /**
   *
   */
  constructor(private readonly sso: ScrollStrategyOptions) {
    this.scrollStrategy = sso.reposition();
  }
}
