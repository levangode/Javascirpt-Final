import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-registration-page',
  templateUrl: './university-registration-page.component.html',
  styleUrls: ['./university-registration-page.component.scss']
})
export class UniversityRegistrationPageComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  webAddress: string = "";
  email: string = "";


  constructor() { }

  ngOnInit() {
  }

}
