import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {UniversityService} from "../university.service";

@Component({
  selector: 'app-uni-about',
  templateUrl: './uni-about.component.html',
  styleUrls: ['./uni-about.component.scss']
})
export class UniAboutComponent implements OnInit {


  about: string = "";
  constructor(private dataService: DataService, private universityService: UniversityService) {

  }

  ngOnInit() {
    this.about = this.universityService.getCurrentUniversity().about;
    console.log(this.universityService.getCurrentUniversity());
  }

}
