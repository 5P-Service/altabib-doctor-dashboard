import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificatedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLogedIn() ? true : this.router.navigate(['auth', 'login', this.router.parseUrl(this.router.url).root.segments.copyWithin(1, -1)]);
  }

}
