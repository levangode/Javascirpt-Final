import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-page',
  templateUrl: './university-page.component.html',
  styleUrls: ['./university-page.component.scss']
})
export class UniversityPageComponent implements OnInit {


  currentComponent: string = "news";
  constructor() { }

  ngOnInit() {
  }

  changeItem(favourites: string) {
    this.currentComponent = favourites;
  }


  isNews() {
    return this.currentComponent === "news";
  }

  isAbout() {

    return this.currentComponent === "about";
  }

  isFaculties() {

    return this.currentComponent === "faculties";

  }

  isEvnets() {

    return this.currentComponent === "events";
  }

  isFAQ() {

    return this.currentComponent === "FAQ";
  }
}
