import { Component, OnInit } from '@angular/core';
import {UniversityService} from "../../_services/university.service";

@Component({
  selector: 'app-faculties-control',
  templateUrl: './faculties-control.component.html',
  styleUrls: ['./faculties-control.component.scss']
})
export class FacultiesControlComponent implements OnInit {

  faculties: Array<any>;

  constructor(private universityService: UniversityService) { }

  ngOnInit() {
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.faculties = this.universityService.getCurrentUniversity().universityFaculties;
      console.log(this.faculties);
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.faculties = this.universityService.getCurrentUniversity().universityFaculties;
      console.log(this.faculties);
    }
  }

}
