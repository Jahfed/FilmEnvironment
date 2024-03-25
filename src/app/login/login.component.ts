import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookiesComponent } from '../cookies/cookies.component';
import { LoginAuthenticationService } from '../services/auth/login-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CookiesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private router: Router, private loginService: LoginAuthenticationService) { };


  user: string = 'username';
  password: string = 'password';
  loginObj: { user: string, password: string };



  login(username: string, password: string) {
    const redirect = this.loginService.loginAuthenticate(username, password);
    redirect ? this.router.navigate(['Production']) : this.router.navigate(['unauthorized']);
  }

}
