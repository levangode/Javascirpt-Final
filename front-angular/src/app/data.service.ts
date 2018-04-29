import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs/BehaviorSubject";
import { CookieService } from "angular2-cookie/core";
import {SocialUser} from "angular5-social-login";

@Injectable()
export class DataService {

  constructor(private cookieService: CookieService) { }

  getUser(){
    return <SocialUser> this.cookieService.getObject("user");
  }

  setUser(user : object){
    this.cookieService.putObject("user", user);
  }

  removeUser(){
    this.cookieService.remove("user");
  }
}
