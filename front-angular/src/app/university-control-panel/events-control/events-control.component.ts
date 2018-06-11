import {Component, OnInit} from '@angular/core';
import {UniversityService} from "../../_services/university.service";
import {animate, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-events-control',
  templateUrl: './events-control.component.html',
  styleUrls: ['./events-control.component.scss'],
  animations: [
    trigger('news', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(-75%)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ]),
    trigger('creation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-55%)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class EventsControlComponent implements OnInit {

  events: Array<any>;
  model: any = {};
  loading = false;
  showCreatePanel = false;

  constructor(private universityService: UniversityService) {
    this.events = [];
  }

  ngOnInit() {
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.events = this.universityService.getCurrentUniversity().universityEvents;
      console.log(this.events);
    });
    if (this.universityService.getCurrentUniversitySubject().isStopped) {
      this.events = this.universityService.getCurrentUniversity().universityEvents;
      console.log(this.events);
    }
  }

  changeState() {
    this.showCreatePanel = !this.showCreatePanel;
    this.model = {};
  }

  createEvent(){

  }

}
