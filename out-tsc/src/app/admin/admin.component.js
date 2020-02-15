import * as tslib_1 from "tslib";
import { OrderService } from './../services/order.service';
import { Component } from '@angular/core';
let AdminComponent = class AdminComponent {
    constructor(orderService) {
        this.orderService = orderService;
    }
    ngOnInit() {
        this.orderService.getOrders()
            .subscribe(orders => this.orders = orders);
    }
};
AdminComponent = tslib_1.__decorate([
    Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [OrderService])
], AdminComponent);
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map