import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

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


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  addUniversity() {
    let uni = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone,
      "webAddress": this.webAddress,
      "email": this.email
    };
    this.dataService.addUniversity(uni).subscribe();
    this.router.navigate(['']);
  }
}
