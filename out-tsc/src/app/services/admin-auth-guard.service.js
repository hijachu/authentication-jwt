import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth.service";
let AdminAuthGuard = class AdminAuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        let user = this.authService.currentUser;
        if (user && user.admin)
            return true;
        this.router.navigate(['/no-access']);
        return false;
    }
};
AdminAuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AdminAuthGuard_Factory() { return new AdminAuthGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AuthService)); }, token: AdminAuthGuard, providedIn: "root" });
AdminAuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        AuthService])
], AdminAuthGuard);
export { AdminAuthGuard };
//# sourceMappingURL=admin-auth-guard.service.js.map