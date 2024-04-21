import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
// import { TogglePasswordEditing, ToggleProfileEditing } from './servises/toggle-profile';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
];


@NgModule({
  // providers: [ToggleProfileEditing, TogglePasswordEditing],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterOutlet, RouterLink],
})
export class AppRoutingModule {
}
