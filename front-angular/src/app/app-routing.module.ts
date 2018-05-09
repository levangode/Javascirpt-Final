import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {UniversityPageComponent} from "./university-page/university-page.component";

const routes: Routes = [
  {
    path: '',

    component: HomeComponent
  },
  {
    path: 'university-page',
    component: UniversityPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
