import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs/BehaviorSubject";
import { CookieService } from "angular2-cookie/core";
import {SocialUser} from "angular5-social-login";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  getUser(): SocialUser{
    return <SocialUser> this.cookieService.getObject("user");
  }

  setUser(user : object){
    this.cookieService.putObject("user", user);
  }

  removeUser(){
    this.cookieService.remove("user");
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/mes-gov-ge');
  }
}
