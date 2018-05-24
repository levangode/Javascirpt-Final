import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-login',
  templateUrl: './university-login.component.html',
  styleUrls: ['./university-login.component.scss']
})
export class UniversityLoginComponent implements OnInit {


  username: string = "";
  password: string = "";
  constructor() { }

  ngOnInit() {
  }

  loginUser(){
    console.log(this.username);
    console.log(this.password);
  }

}
