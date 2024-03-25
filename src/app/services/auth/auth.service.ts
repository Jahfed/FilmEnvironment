import { Injectable, inject } from '@angular/core';
import { Role } from '../../login/role';
import { LoginAuthenticationService } from './login-authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login: LoginAuthenticationService = inject(LoginAuthenticationService);

  constructor() {

  }

  getUserRole(): Role {
    return Role.LINEPRODUCER;
  }

  getLoggedInStatus() {
    const value = this.login.checkLogin();
    return value;
  }

}
