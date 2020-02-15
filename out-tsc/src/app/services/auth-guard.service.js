import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth.service";
let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn())
            return true;
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AuthService)); }, token: AuthGuard, providedIn: "root" });
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        AuthService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.service.js.map