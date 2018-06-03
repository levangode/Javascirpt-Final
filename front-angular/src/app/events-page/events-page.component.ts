import { Component, OnInit } from '@angular/core';
import {DataService} from "../_services/data.service";

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  allEvents: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEvents().subscribe(value => this.allEvents = value);
  }

  getEvents(){
    return this.allEvents;
  }

}
