import { Injectable } from '@angular/core';
import {DataService} from "../data.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UniversityService {


  universitySubject: Subject<any>;
  university: any;

  constructor(private dataService: DataService) {
    this.universitySubject = new Subject<any>();
  }

  initUniversity(id: any){
    this.dataService.getUniversity(id).subscribe(value => {
      this.university = value;
      this.universitySubject.next(value);
      this.universitySubject.complete();
    });
  }

  getCurrentUniversitySubject(){
    return this.universitySubject;
  }

  getCurrentUniversity(){
    return this.university;
  }

}
