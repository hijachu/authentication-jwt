import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // let token = JSON.parse(localStorage.getItem('token'));
    let token = localStorage.getItem('token');

    // if (currentUser && currentUser.token) {
    if (token) {
      request = request.clone({
        setHeaders: {
          // Authorization: `Bearer ${currentUser.token}`
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
