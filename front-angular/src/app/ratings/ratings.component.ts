import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  currentComponent: string = 'byEntrancePoints';

  constructor() { }

  ngOnInit() {
  }


  changeItem(ratingsType: string) {
    this.currentComponent = ratingsType;
  }

  isByPoints(){
    return this.currentComponent === "byEntrancePoints";
  }

  isByStudentCount(){
    return this.currentComponent === "byStudentCount";
  }


  isByTopStudents() {
    return this.currentComponent === "byTopStudents";
  }
}
