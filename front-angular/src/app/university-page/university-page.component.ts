import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "./university.service";

@Component({
  selector: 'app-university-page',
  templateUrl: './university-page.component.html',
  styleUrls: ['./university-page.component.scss']
})
export class UniversityPageComponent implements OnInit {

  id: any;
  currentComponent: string = "news";
  university: any;

  constructor(private route: ActivatedRoute, private universityService: UniversityService) {

  }

  ngOnInit() {
    this.route.params.subscribe(res => this.id = res.id);
    this.universityService.initUniversity(this.id);

    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.university = this.universityService.getCurrentUniversity();
      console.log(this.university);
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.university = this.universityService.getCurrentUniversity();
      console.log(this.university);
    }
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

  isEvents() {

    return this.currentComponent === "events";
  }

  isFAQ() {

    return this.currentComponent === "FAQ";
  }
}
