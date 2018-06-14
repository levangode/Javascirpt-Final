import { Component, OnInit } from '@angular/core';
import {UniversityService} from "../university.service";

@Component({
  selector: 'app-uni-faq',
  templateUrl: './uni-faq.component.html',
  styleUrls: ['./uni-faq.component.scss']
})
export class UniFaqComponent implements OnInit {

  faq: Array<any>;
  constructor(private universityService: UniversityService) { }

  ngOnInit() {
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.faq = this.universityService.getCurrentUniversity().faqElements;
      console.log(this.faq);
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.faq = this.universityService.getCurrentUniversity().faqElements;
      console.log(this.faq);
    }
  }

}
