import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "../_services/university.service";

@Component({
  selector: 'app-university-control-panel',
  templateUrl: './university-control-panel.component.html',
  styleUrls: ['./university-control-panel.component.scss']
})
export class UniversityControlPanelComponent implements OnInit {

  id: number;
  currentComponent: string = "news";
  university: any;
  logo = "";

  constructor(private route: ActivatedRoute, private universityService: UniversityService) {

  }

  ngOnInit() {
    let currentUniversity = JSON.parse(localStorage.getItem('currentUniversity'));
    this.id = +currentUniversity.id;
    console.log(this.id);
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
