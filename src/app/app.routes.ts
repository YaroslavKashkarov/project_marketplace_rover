import { RouterModule, Routes, RouterLink, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { CreateAnItemComponent } from './components/create-an-item/create-an-item.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'signup', component: RegisterComponent},
    {path: 'add-item',component: CreateAnItemComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, RouterOutlet, RouterLink]
})
export class AppRoutingModule { }
