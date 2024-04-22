import {RouterLink, RouterModule, RouterOutlet, Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NgModule} from '@angular/core';
import {CategoryComponent} from "./components/category/category.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'home/:category', component: CategoryComponent},

 // {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterOutlet, RouterLink],
})
export class AppRoutingModule {
}
