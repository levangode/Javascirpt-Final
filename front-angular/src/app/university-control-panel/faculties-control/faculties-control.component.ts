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
    // this.model.facultyNumber = 0;
    // this.model.programName = "";
    // this.model.qualification = "";
    // this.model.accredited = "";
    // this.model.language = "";
    // this.model.financing = "";
    // this.model.credits = 0;
    // this.model.annualFee = 0;
    // this.model.numPlaces = 0;
    // this.model.priorities = "";
    this.subjects.forEach(value => {
      this.subjectsInfo[value] = {};
    });

  }

  createFaculty() {
    let tmp = [];
    this.subjects.forEach(value => {
        if(this.subjectsInfo[value].quotient !== undefined){
          this.subjectsInfo[value].name = value;
          tmp.push(this.subjectsInfo[value]);
        }
    });
    this.model.facultySubjects = tmp;
    this.faculties.unshift(this.model);
    this.universityService.updateFaculties(this.faculties).subscribe(value => {
      this.loading = false;
      this.changeState();
    });
  }
}
