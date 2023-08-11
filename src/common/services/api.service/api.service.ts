import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ApiResponse } from '../../entities/api-response.entity/api-response';
import { AuthService } from '../../../services/auth.service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient, private authService: AuthService) { }

  apiHeader: HttpHeaders = new HttpHeaders({ 'accept': 'application/json', 'Authorization': 'Bearer ' + this.authService.getCurrentUser()?.accessToken })
  responsePipe = pipe(
    tap((res: ApiResponse) => {
      if (!res.success) throw { kind: res.kind, message: res.message, data: res.data };
    }),
    map((res: ApiResponse) => res.data)
  )
}
