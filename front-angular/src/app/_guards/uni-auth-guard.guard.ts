import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {DataService} from "../_services/data.service";

@Injectable()
export class UniAuthGuardGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(localStorage.getItem('currentUniversity')){
      return true;
    }

    this.router.navigate(['/university-login'], {queryParams: {returnUrl: state.url}});
    return true;
  }
}
