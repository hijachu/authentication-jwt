import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from './../services/auth.service';
let LoginComponent = class LoginComponent {
    constructor(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    signIn(credentials) {
        this.authService.login(credentials)
            .subscribe(result => {
            if (result) {
                let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
                this.router.navigate([returnUrl || '/']);
            }
            else
                this.invalidLogin = true;
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute,
        AuthService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map