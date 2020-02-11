import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .pipe(
        map(response => {
          console.log(response);
          if (response) return true;
          else return false;
        })
      );
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }
}

