import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {


  private universities: Array<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUniversities().subscribe(value => this.universities = value);
  }

  getUniversities(){
    return this.universities;
  }

  getNumPlaces(university: any){
    let faculties: Array<any> = university.universityFaculties;
    let count = 0;
    for(let fac of faculties){
      count+=fac.numPlaces;
    }
    return count;
  }

  getNumFaculties(university: any){
    return (<Array<any>>university.universityFaculties).length;
  }

}
