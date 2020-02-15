import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";
let AuthService = class AuthService {
    constructor(
    // public jwtHelper: JwtHelperService,
    http) {
        this.http = http;
    }
    login(credentials) {
        return this.http.post('/api/authenticate', JSON.stringify(credentials))
            .pipe(map(response => {
            console.log(response);
            if (response && response['token']) {
                localStorage.setItem('token', response['token']);
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
        let jwtHelper = new JwtHelperService();
        let token = localStorage.getItem('token');
        // it can handle token is null automatically
        let expirationDate = jwtHelper.getTokenExpirationDate(token);
        // console.log("Expiration Date", expirationDate);
        let isExpired = jwtHelper.isTokenExpired(token);
        // console.log("isExpired", isExpired);
        return !isExpired;
    }
    get currentUser() {
        let token = localStorage.getItem('token');
        if (!token)
            return null;
        return new JwtHelperService().decodeToken(token);
    }
};
AuthService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map