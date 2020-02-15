import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
    }
    getOrders() {
        return this.http.get('/api/orders')
            .pipe(map(response => response));
    }
};
OrderService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map