import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {UniversityPageComponent} from "./university-page/university-page.component";
import {UniversityRegistrationPageComponent} from "./university-registration-page/university-registration-page.component";
import {UniversityListComponent} from "./university-list/university-list.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'university-page/:id',
    component: UniversityPageComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'uni-register',
    component: UniversityRegistrationPageComponent
  },
  {
    path: 'universities',
    component: UniversityListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
