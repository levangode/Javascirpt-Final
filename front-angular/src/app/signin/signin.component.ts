import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider, SocialUser,
} from 'angular5-social-login';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  private user: SocialUser;

  constructor(private socialAuthService: AuthService, private http: HttpClient, private dataService: DataService,
              private router: Router, private _dataService: DataService) {
  }

  sendToRestApiMethod(token: string): void {
    this.http.post('https://graph.facebook.com/v2.12/oauth/access_token?', {token: token})
      .subscribe(onSuccess => {
        console.log("Login Was successful");
          //login was successful
          //save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login
        }, onFail => {
          console.log("Login Failed");
          //login was unsuccessful
          //show an error message
        }
      );
  }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        window.location.reload(true);
        this.dataService.setUser(userData);
        this.dataService.saveUser(userData).subscribe();
      }
    );
  }

  signOut(){
    this._dataService.removeUser();
    window.location.reload(true);
  }

  public isLoggedIn(){
    return this.user !== undefined;
  }

  public getUser(){
    return this.user;
  }

  ngOnInit() {
    this.user = this._dataService.getUser();
  }

  goToProfile() {
    this.router.navigate(['/user']);
  }
}
