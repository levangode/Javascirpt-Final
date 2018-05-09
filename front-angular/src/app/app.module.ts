import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {CookieService} from "angular2-cookie/core";
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DataService} from "./data.service";
import {HttpClientModule} from "@angular/common/http";
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from "angular5-social-login";
import {SigninComponent} from "./signin/signin.component";
import { UniversityPageComponent } from './university-page/university-page.component';

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
    UniversityPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    DataService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}




