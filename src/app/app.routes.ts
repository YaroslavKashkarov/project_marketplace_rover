import {RouterLink, RouterModule, RouterOutlet, Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NgModule} from '@angular/core';
import {
	CreateAnItemComponent,
} from './components/header/create-an-item/create-an-item.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FilterComponent} from './components/header/filter/filter.component';
import {
	ShoppingCartComponent,
} from './components/header/shopping-cart/shopping-cart.component';

export const routes: Routes = [
	{path: '', component: HomePageComponent},
	{
		path: '', runGuardsAndResolvers: 'always',
		canActivate: [],
		children: [
			{path: 'filter', component: FilterComponent},
			{path: 'home-page/:shopping-cart', component: ShoppingCartComponent},
			{path: 'create-an-item', component: CreateAnItemComponent},
			{path: 'navbar/:category-product', component: NavbarComponent},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule, RouterOutlet, RouterLink],
})
export class AppRoutingModule {
}
