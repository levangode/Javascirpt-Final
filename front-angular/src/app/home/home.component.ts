import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {SocialUser} from "angular5-social-login";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private user: SocialUser;

  constructor(private _dataService: DataService) {
  }

  public isLoggedIn(){
    return this.user !== undefined;
  }

  public getUser(){
    return this.user;
  }

  ngOnInit() {
    this.user = this._dataService.getUser();
  }

}
