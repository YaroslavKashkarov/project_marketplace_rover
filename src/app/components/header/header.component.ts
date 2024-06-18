import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { CreateAnItemComponent } from './create-an-item/create-an-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthenticationService } from '../services/authentication.service';
import { DialogService } from '../services/dialog.service';
import { IUser } from '../../../core/interfaces/user.interface';
import { Subscription } from 'rxjs';
import { UserIconComponent } from './user-icon/user-icon.component';
import { IFilters } from '../../../core/interfaces/filters.interface';
import { SearchFieldComponent } from './search-field/search-field.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FilterComponent, CreateAnItemComponent, ShoppingCartComponent, RouterLink, MatDialogModule, UserIconComponent, SearchFieldComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy{
  
  currentUser: IUser | null;
  userSubscription: Subscription;

  filters: any = {}
  
//   isFilterVisible: boolean = false;
  isCreateItemVisible: boolean = false;

  constructor(public dialog: MatDialog, private dialogService: DialogService, private authService: AuthenticationService, private route: ActivatedRoute) {
    this.userSubscription = this.authService.$currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.filters = {};

      if (params.keys){
        params.keys.forEach(key => {
          this.filters[key] = key === 'negotiable' ? Boolean(params.get(key)) : params.get(key);
        });
      }
    })
  }

  isCreateItem(): void {
    this.isCreateItemVisible = !this.isCreateItemVisible;
  }

  openFilter(event: Event): void {
	  this.dialogService.openFilterDialog(this.filters);
  }

  openAuthDialog(): void {
    this.dialogService.openAuthDialog();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
