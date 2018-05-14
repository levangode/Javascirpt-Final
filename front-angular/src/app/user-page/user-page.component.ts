import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  currentComponent: string = "interests";

  constructor() { }

  ngOnInit() {
  }

  isInterests(){
    return this.currentComponent === "interests";
  }

  changeItem(favourites: string) {
    this.currentComponent = favourites;
  }

  isFavourites() {
    return this.currentComponent === "favourites";
  }

  isFriends() {
    return this.currentComponent === "friends";
  }

  isAchievements() {
    return this.currentComponent === "achievements";
  }

  isProfile() {
    return this.currentComponent === "profile";
  }
}
