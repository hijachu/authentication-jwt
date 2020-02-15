import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
let HomeComponent = class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map