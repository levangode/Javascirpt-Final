import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  interests: Array<string> = [
    "ისტორია",
    "ქართული",
    "მათემატიკა",
    "ქიმია",
    "ბიოლოგია",
    "მედიცინა",
    "სპორტი",
    "გეოგრაფია",
  ];

  myInterests: Array<string> = [

  ];

  constructor() { }

  ngOnInit() {
  }

  getInterests(){
    return this.interests;
  }

  getMyInterests(){
    return this.myInterests;
  }

  addInterest(interest: string) {
    this.myInterests.push(interest);
    var index = this.interests.indexOf(interest, 0);
    if (index > -1) {
      this.interests.splice(index, 1);
    }
  }

  removeInterest(interest: string) {
    this.interests.push(interest);
    var index = this.myInterests.indexOf(interest, 0);
    if (index > -1) {
      this.myInterests.splice(index, 1);
    }
  }
}
