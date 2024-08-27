import {Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CategoryComponent} from "./components/category/category.component";
import {CreateAnItemComponent} from './components/header/create-an-item/create-an-item.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProfileComponent} from './components/profile/profile/profile.component';
import {FavoriteComponent} from './components/favorite/favorite.component';
import {ResetPasswordPageComponent} from './components/header/auth-dialog/reset-password/reset-password-page/reset-password-page.component';
import {resetPasswordGuard} from './guards/reset-password.guard';
import {authenticatedUserGuard} from './guards/authenticated-user.guard';
import {SearchResultComponent} from './components/category/search-result/search-result.component';
import { ShoppingCartComponent } from './components/header/shopping-cart/shopping-cart.component';
import { CheckoutPageComponent } from './components/header/shopping-cart/checkout-page/checkout-page.component';
import { OrderPageComponent } from './components/header/shopping-cart/order-page/order-page.component';


export const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    children: [
      {path: 'reset-password', canActivate: [resetPasswordGuard], component: ResetPasswordPageComponent},
      // {path: 'home/filter', component: FilterComponent},
    ]
  },
  {path: 'home', component: HomePageComponent},
  {path: 'home/category', component: CategoryComponent},
  {path: 'home/search-result', component: SearchResultComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
	{path: 'shopping-cart/checkout', component: CheckoutPageComponent},
  {path: 'order', component: OrderPageComponent},
  {
    path: '', runGuardsAndResolvers: 'always',
    canActivate: [],
    children: [

      {path: 'create-an-item', component: CreateAnItemComponent},
      {path: 'navbar/category-product', component: NavbarComponent},
      {path: 'profile', canActivate: [authenticatedUserGuard], component: ProfileComponent},
      {path: 'favorite', component: FavoriteComponent},

    ],
  },
];

export class AppRoutingModule {
}
