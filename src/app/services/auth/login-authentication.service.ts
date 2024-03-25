import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor() { }

  loginAuthenticate(username: string, password: string) {
    let loggedIn: boolean = (username === "admin" && password === "password") ? true : false;
    return loggedIn;
  }

  checkLogin() {
    let value = "wtf";
    return value || "";
  }
}