import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {SocialUser} from "angular5-social-login";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private user: SocialUser;
  public news: Array<any>;


  constructor(private _dataService: DataService, private http: HttpClient) {
  }

  public isLoggedIn() {
    return this.user !== undefined;
  }

  public getUser() {
    return this.user;
  }

  ngOnInit() {
    this.user = this._dataService.getUser();
    this._dataService.getAll().subscribe(value => {
      this.news = value;
    });
  }

}
