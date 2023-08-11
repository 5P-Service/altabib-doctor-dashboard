import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class TokenExpirtyInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private jwtHelperService: JwtHelperService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = request.headers.get('Authorization');
    if (token) {
      if (this.jwtHelperService.isTokenExpired(token)) {
        this.authService.logOut()
        this.router.navigate(['auth', 'login']);
        return Observable.throw(new Error('Expitred token'));
      }
    }
    return next.handle(request);
  }
}
