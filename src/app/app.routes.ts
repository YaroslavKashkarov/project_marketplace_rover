
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NgModule} from '@angular/core';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: '**', component: NotFoundPageComponent},
];


@NgModule({
  // providers: [ToggleProfileEditing, TogglePasswordEditing],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterOutlet, RouterLink],
})
export class AppRoutingModule {
}
