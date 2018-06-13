import { Component, OnInit } from '@angular/core';
import {UniversityService} from "../../_services/university.service";

@Component({
  selector: 'app-faculties-control',
  templateUrl: './faculties-control.component.html',
  styleUrls: ['./faculties-control.component.scss']
})
export class FacultiesControlComponent implements OnInit {

  faculties: Array<any>;

  model: any = {};
  loading = false;
  showCreatePanel = false;
  subjects = ["ქართული ენა და ლიტერატურა", "უნარები", "უცხოური ენა", "მათემატიკა", "ისტორია", "გეოგრაფია", "ფიზიკა",
  "ქიმია", "ბიოლოგია", "სამოქალაქო განათლება", "შემოქმედებითი ტური"];

  subjectsInfo: any = {};

  constructor(private universityService: UniversityService) {
    this.subjectsInfo = {};
    this.model = {};
    this.subjects.forEach(value => {
      this.subjectsInfo[value] = {};
    });
    console.log(this.subjectsInfo);
  }

  ngOnInit() {
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.faculties = this.universityService.getCurrentUniversity().universityFaculties;
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.faculties = this.universityService.getCurrentUniversity().universityFaculties;
    }
  }

  changeState() {
    this.showCreatePanel = !this.showCreatePanel;
    this.subjectsInfo = {};
    this.model = {};
    this.subjects.forEach(value => {
      this.subjectsInfo[value] = {};
    });

  }

  createFaculty() {
    console.log(this.subjectsInfo);
    return false;
  }
}
