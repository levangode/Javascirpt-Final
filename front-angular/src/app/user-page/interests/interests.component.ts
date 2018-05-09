import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  interests: Array<any>;
  userId: string = "asd123";
  myInterests: Array<any> = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAllInterests().subscribe(value => {
      this.interests = value;
      this.dataService.getUserInterests(this.userId).subscribe(value => {
        this.myInterests = value;
        console.log(this.interests);
        console.log(this.myInterests);
        this.myInterests.forEach(value => {
          this.interests = this.interests.filter(value1 =>
            JSON.stringify(value) !== JSON.stringify(value1)
          );
        });
      });
    });
  }

  getInterests() {
    return this.interests;
  }

  getMyInterests() {
    return this.myInterests;
  }

  addInterest(interest: any) {
    console.log(interest);
    this.myInterests.push(interest);
    let index = this.interests.indexOf(interest, 0);
    if (index > -1) {
      this.interests.splice(index, 1);
    }
    this.dataService.addInterest(interest, this.userId).subscribe();
  }

  removeInterest(interest) {
    this.interests.push(interest);
    let index = this.myInterests.indexOf(interest, 0);
    if (index > -1) {
      this.myInterests.splice(index, 1);
    }
    this.dataService.removeInterest(interest, this.userId).subscribe();
  }
}
