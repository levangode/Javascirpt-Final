import { Component, OnInit } from '@angular/core';
import {DataService} from "../../_services/data.service";
import {UniversityService} from "../../_services/university.service";
import {ElementRef, ViewChild} from "angular2/core";
import {AlertService} from "../../_services/alert.service";

@Component({
  selector: 'app-about-control',
  templateUrl: './about-control.component.html',
  styleUrls: ['./about-control.component.scss']
})
export class AboutControlComponent implements OnInit {
  @ViewChild('show-about') aboutDiv: ElementRef;

  about: string = "";
  loading = false;
  constructor(private dataService: DataService, private universityService: UniversityService, private alertService: AlertService) {
    this.about= "";
  }

  ngOnInit() {
    this.universityService.getCurrentUniversitySubject().subscribe(value => {
      this.about = this.universityService.getCurrentUniversity().about;
    });
    if(this.universityService.getCurrentUniversitySubject().isStopped){
      this.about = this.universityService.getCurrentUniversity().about;
    }
  }

  editAbout() {
    this.loading = true;
    this.universityService.updateAbout(this.about)
      .subscribe(
        data => {
          this.alertService.success('ცვლილებები დამახსოვრებულია');
          this.loading = false;
        },
        error => {
          this.alertService.error("მოხდა შეცდომა");
          this.loading = false;
        });
  }
}
