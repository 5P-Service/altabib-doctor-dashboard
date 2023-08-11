import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRole } from 'src/app/entities/user.entity';
import { Doctor } from 'src/app/entities/user.entity/doctor.entity';
import { AuthService } from 'src/app/services/auth.service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorSatisfyProfileGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogedIn()) {
      const doctor: Doctor | null = this.authService.getCurrentUser()?.role == UserRole.DOCTOR ? this.authService.getCurrentUser() as Doctor : null;
      if (doctor) {
        return (!doctor.hasCalender || !doctor.hasCalenderUpToDate) ? this.router.navigate(['doctor', 'profile', 'settings', 'schedule', this.router.parseUrl(this.router.url).root.segments.copyWithin(1, -1)]) : true;
      } else return false;
    } else return false;
  }

}
