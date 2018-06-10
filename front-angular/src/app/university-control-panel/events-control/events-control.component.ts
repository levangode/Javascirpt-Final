import { Component, OnInit } from '@angular/core';
import {UniversityService} from "../../_services/university.service";

@Component({
  selector: 'app-events-control',
  templateUrl: './events-control.component.html',
  styleUrls: ['./events-control.component.scss']
})
export class EventsControlComponent implements OnInit {

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
