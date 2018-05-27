import { Component, OnInit } from '@angular/core';
import {UniversityService} from "../university.service";

@Component({
  selector: 'app-uni-events',
  templateUrl: './uni-events.component.html',
  styleUrls: ['./uni-events.component.scss']
})
export class UniEventsComponent implements OnInit {
  events: Array<any>;
  constructor(private universityService: UniversityService) { }

  ngOnInit() {
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.events = this.universityService.getCurrentUniversity().universityEvents;
      console.log(this.events);
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.events = this.universityService.getCurrentUniversity().universityEvents;
      console.log(this.events);
    }
  }

}
