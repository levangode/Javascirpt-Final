import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-university-login',
  templateUrl: './university-login.component.html',
  styleUrls: ['./university-login.component.scss']
})
export class UniversityLoginComponent implements OnInit {


  username: string = "";
  password: string = "";
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  loginUser(){
    if(this.dataService.isValidUniCredentials(this.username, this.password)){
      //change route to uni panel
    }
    return false;
  }

}
