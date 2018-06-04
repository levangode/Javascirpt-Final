import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UniversityService {


  universitySubject: Subject<any>;
  university: any;

  constructor(private dataService: DataService, private http: HttpClient) {
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

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(university: any) {
    return this.http.post('http://localhost:8080/universities', university);
  }

  update(user: any) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }

}