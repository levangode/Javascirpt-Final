import { Component, OnInit } from '@angular/core';
import {DataService} from "../../_services/data.service";
import {UniversityService} from "../../_services/university.service";

@Component({
  selector: 'app-about-control',
  templateUrl: './about-control.component.html',
  styleUrls: ['./about-control.component.scss']
})
export class AboutControlComponent implements OnInit {

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
