import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {UniversityPageComponent} from "./university-page/university-page.component";
import {UniversityRegistrationPageComponent} from "./university-registration-page/university-registration-page.component";
import {UniversityListComponent} from "./university-list/university-list.component";
import {RatingsComponent} from "./ratings/ratings.component";
import {UniversityLoginComponent} from "./university-login/university-login.component";
import {EventsPageComponent} from "./events-page/events-page.component";

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
  },
  {
    path: 'ratings',
    component: RatingsComponent
  },
  {
    path: 'university-login',
    component: UniversityLoginComponent
  },
  {
    path: 'events',
    component: EventsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
