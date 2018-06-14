import { Component, OnInit } from '@angular/core';
import {DataService} from "../_services/data.service";
import {ActivatedRoute, Data} from "@angular/router";
import {UniversityService} from "../_services/university.service";

@Component({
  selector: 'app-university-page',
  templateUrl: './university-page.component.html',
  styleUrls: ['./university-page.component.scss']
})
export class UniversityPageComponent implements OnInit {

  id: any;
  currentComponent: string = "news";
  university: any;
  logo = "";
  constructor(private route: ActivatedRoute, private universityService: UniversityService, private dataService: DataService) {

  }

  ngOnInit() {
    this.route.params.subscribe(res => this.id = res.id);
    this.universityService.initUniversity(this.id);

    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.university = this.universityService.getCurrentUniversity();
      this.logo = this.university.logo;
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.university = this.universityService.getCurrentUniversity();
      this.logo = this.university.logo;
    }
  }

  changeItem(favourites: string) {
    this.currentComponent = favourites;
  }

  isUser(){
    return this.dataService.getUser() !== undefined;
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

  addFavourite(e) {
    if(e.target.checked){
      this.universityService.addFavourite(this.university.id, this.dataService.getUser().id);
      console.log("check");
    } else {
      console.log("uncheck")
    }

  }

  isChecked() {
    return true; //if(user has favourited this uni)
  }
}
