import { Component, OnInit } from '@angular/core';
import {UniversityService} from "../university.service";

@Component({
  selector: 'app-uni-news',
  templateUrl: './uni-news.component.html',
  styleUrls: ['./uni-news.component.scss']
})
export class UniNewsComponent implements OnInit {

  news: Array<any>;

  constructor(private universityService: UniversityService) { }

  ngOnInit() {
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.news = this.universityService.getCurrentUniversity().universityNews;
      console.log(this.news);
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.news = this.universityService.getCurrentUniversity().universityNews;
      console.log(this.news);
    }
  }

}
