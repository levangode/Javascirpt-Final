import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {DataService} from "../_services/data.service";

@Injectable()
export class UserAuthGuardGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.dataService.getUser() !== undefined){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
