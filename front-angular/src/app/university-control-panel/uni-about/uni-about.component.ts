import { Component, OnInit } from '@angular/core';
import {DataService} from "../../_services/data.service";
import {UniversityService} from "../../_services/university.service";

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
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.about = this.universityService.getCurrentUniversity().about;
      console.log(this.about);
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.about = this.universityService.getCurrentUniversity().about;
      console.log(this.about);
    }
  }

}
