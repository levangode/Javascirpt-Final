import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {CookieService} from "angular2-cookie/core";
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DataService} from "./_services/data.service";
import {HttpClientModule} from "@angular/common/http";
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from "angular5-social-login";
import {SigninComponent} from "./signin/signin.component";
import { UniversityPageComponent } from './university-page/university-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { InterestsComponent } from './user-page/interests/interests.component';
import { UniversityRegistrationPageComponent } from './university-registration-page/university-registration-page.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { RatingsComponent } from './ratings/ratings.component';
import { UniversityLoginComponent } from './university-login/university-login.component';
import { UniAboutComponent } from './university-page/uni-about/uni-about.component';
import { UniNewsComponent } from './university-page/uni-news/uni-news.component';
import { UniEventsComponent } from './university-page/uni-events/uni-events.component';
import { UniFacultiesComponent } from './university-page/uni-faculties/uni-faculties.component';
import { UniFaqComponent } from './university-page/uni-faq/uni-faq.component';
import {UniversityService} from "./_services/university.service";
import { EventsPageComponent } from './events-page/events-page.component';
import {UserAuthGuardGuard} from "./_guards/user-auth-guard.guard";
import { AlertComponent } from './alert/alert.component';
import {UniAuthenticationService} from "./_services/uni-authentication.service";
import {AlertService} from "./_services/alert.service";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("2006476833012981")
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    UniversityPageComponent,
    SigninComponent,
    UserPageComponent,
    InterestsComponent,
    UniversityRegistrationPageComponent,
    UniversityListComponent,
    MenuHeaderComponent,
    RatingsComponent,
    UniversityLoginComponent,
    UniAboutComponent,
    UniNewsComponent,
    UniEventsComponent,
    UniFacultiesComponent,
    UniFaqComponent,
    EventsPageComponent,
    AlertComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule
  ],
  providers: [
    DataService,
    UniAuthenticationService,
    AlertService,
    UniversityService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    CookieService,
    UserAuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}




