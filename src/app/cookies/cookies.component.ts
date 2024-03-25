import { Component } from '@angular/core';

@Component({
  selector: 'cookies',
  standalone: true,
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {
  hidden = false;

  hideCookie(accept: string) {
    this.hidden = true;
    accept === "accept" && console.log("cookies Accepted");
  }

  settings() {
    alert("settingsView");
  }

}
