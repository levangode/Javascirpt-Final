import { Component, OnInit } from '@angular/core';
import {DataService} from "../_services/data.service";
import {Router} from "@angular/router";
import {UniversityService} from "../_services/university.service";
import {AlertService} from "../_services/alert.service";

@Component({
  selector: 'app-university-registration-page',
  templateUrl: './university-registration-page.component.html',
  styleUrls: ['./university-registration-page.component.scss']
})
export class UniversityRegistrationPageComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private universityService: UniversityService,
    private alertService: AlertService) { }

  ngOnInit(){

  }
  register() {
    this.loading = true;
    this.universityService.create(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/university-login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
