import { Injectable } from '@angular/core';
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

  getAllInterests(): Observable<any>{
    return this.http.get("http://localhost:8080/interests");
  }

  addInterest(interest: object, userId){
    return this.http.post("http://localhost:8080/add-interest/"+userId, JSON.stringify(interest),
      {headers:{'Content-Type': 'application/json'}});
  }

  getUserInterests(userId: string): Observable<any>{
    return this.http.get("http://localhost:8080/get-interests/"+userId);
  }

  removeInterest(interest: object, userId){
    return this.http.post("http://localhost:8080/remove-interest/"+userId, JSON.stringify(interest),
      {headers:{'Content-Type': 'application/json'}});
  }
}
