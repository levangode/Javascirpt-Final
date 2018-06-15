import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {DataService} from "./data.service";

@Injectable()
export class UserService {

  user: any;
  userSubject: Subject<any>;

  constructor(private dataService: DataService) {
    this.userSubject = new Subject<any>();
  }


  initUser(id: any){
    this.universitySubject = new Subject<any>();
    this.dataService.getUser(id).subscribe(value => {
      this.user = value;
      this.userSubject.next(value);
      this.userSubject.complete();
    });
  }

  getCurrentUserSubject(){
    return this.userSubject;
  }

  getCurrentUser(){
    return this.user;
  }
}
