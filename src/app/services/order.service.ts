import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() {
    return this.http.get<any[]>('/api/orders')
      .pipe(
        map(response => response)
      );
  }
}
