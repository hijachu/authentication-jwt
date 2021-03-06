import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(
    // public jwtHelper: JwtHelperService,
    private http: HttpClient) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .pipe(
        map((response: any) => {
          console.log(response);
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            return true;
          }
          return false;
        }));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    // return !this.jwtHelper.isTokenExpired();

    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');

    // it can handle token is null automatically
    const expirationDate = jwtHelper.getTokenExpirationDate(token);
    // console.log("Expiration Date", expirationDate);

    const isExpired = jwtHelper.isTokenExpired(token);
    // console.log("isExpired", isExpired);

    return !isExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) { return null; }

    return new JwtHelperService().decodeToken(token);
  }
}

