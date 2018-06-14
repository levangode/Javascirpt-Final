import { Component, OnInit } from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";
import {UniversityService} from "../../_services/university.service";

@Component({
  selector: 'app-faq-control',
  templateUrl: './faq-control.component.html',
  styleUrls: ['./faq-control.component.scss'],
  animations: [
    trigger('faq', [
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
export class FaqControlComponent implements OnInit {

  faq: Array<any> = [];
  model: any = {};
  loading = false;
  showCreatePanel = false;

  constructor(private universityService: UniversityService) {
    this.faq = [];
  }

  ngOnInit() {
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.faq = this.universityService.getCurrentUniversity().universityFaq;
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.faq = this.universityService.getCurrentUniversity().universityFaq;
    }
  }


  changeState() {
    this.showCreatePanel = !this.showCreatePanel;
    this.model = {};
  }

  createFaq() {
    console.log(this.faq);
    this.model.date = Date.now().toString();
    this.loading = true;
    this.faq.unshift(this.model);
    this.universityService.updateFaq(this.faq).subscribe(value => {
      this.loading = false;
      this.changeState();
    });
  }

  deleteFaq(faqElement) {
    var index = this.faq.indexOf(faqElement, 0);
    if (index > -1) {
      const cloned = Object.assign([], this.faq);
      cloned.splice(index, 1);
      this.universityService.updateFaq(cloned).subscribe(value => {
        this.faq.splice(index, 1);
      });

    }
  }
}
