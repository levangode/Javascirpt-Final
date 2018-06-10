import {Component, OnInit} from '@angular/core';
import {UniversityService} from "../../_services/university.service";
import {trigger, style, transition, animate, keyframes, query, stagger} from "@angular/animations";

@Component({
  selector: 'app-news-control',
  templateUrl: './news-control.component.html',
  styleUrls: ['./news-control.component.scss'],
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
export class NewsControlComponent implements OnInit {

  model: any = {};
  news: Array<any> = [];
  loading = false;
  showCreatePanel = false;

  constructor(private universityService: UniversityService) {
  }

  ngOnInit() {
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.news = this.universityService.getCurrentUniversity().universityNews;
    });
    if (this.universityService.getCurrentUniversitySubject().isStopped) {
      this.news = this.universityService.getCurrentUniversity().universityNews;
    }
  }

  createNews() {
    this.model.date = Date.now().toString();
    this.loading = true;
    this.news.unshift(this.model);
    this.universityService.updateNews(this.news).subscribe(value => {
      this.loading = false;
    });
  }

  changeState() {
    this.showCreatePanel = !this.showCreatePanel;
    this.model = {};
  }
}
