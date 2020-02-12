
import { Injectable } from '@angular/core';
import {
  HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // admin true
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';

    // admin false
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6ZmFsc2V9.DLTdOwxPMgCsXA9p2WDJvwimoQvL2Q6Yyn_sm6B4KRE';

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
        console.log(request.body);
        let requestBody = JSON.parse(request.body);
        console.log(requestBody);
        if (requestBody.email === 'mosh@domain.com' && requestBody.password === '1234') {
          requestBody['token'] = token;
          return of(new HttpResponse({ status: 200, body: requestBody }));
        }
        else {
          // else return 400 bad request
          return throwError({ error: { message: 'Username or password is incorrect' } });
        }
      }

      //
      // Fake implementation of /api/orders
      //
      if (request.url.endsWith('/api/orders') && request.method === 'GET') {
        if (request.headers.get('Authorization') === 'Bearer ' + token) {
          return of(new HttpResponse({ status: 200, body: [1, 2, 3] }));
        }
        else {
          // return 401 not authorised if token is null or invalid
          return throwError({ error: { message: 'Unauthorised' } });
        }
      }

      return next.handle(request);

    }))

      // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
