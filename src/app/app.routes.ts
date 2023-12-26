import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateAnItemComponent } from './components/create-an-item/create-an-item.component';
import { NgModule } from '@angular/core';
import { authGuard } from './_guards/auth.guard';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LatestItemsComponent } from './components/latest-items/latest-items.component';
import { ProductComponent } from './components/product/product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CatalogComponent } from './components/catalog/catalog.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            { path: 'add-item',component: CreateAnItemComponent},
            { path: 'profile/:username', component: UserProfileComponent},
            { path: 'profile/edit', component: EditProfileComponent},
            { path: 'favorite', component: FavoriteComponent},
            { path: 'latestitems', component: LatestItemsComponent},
            { path: 'products', component: CatalogComponent},
            { path: 'products/:productid', component: ProductComponent},
            { path: 'products/edit/:productId', component: EditProductComponent},
            { path: 'messages', component: MessagesComponent}
        ]
    },
    { path: 'signup', component: RegisterComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, RouterOutlet, RouterLink]
})
export class AppRoutingModule { }
