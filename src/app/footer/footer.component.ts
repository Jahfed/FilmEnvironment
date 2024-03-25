import { Component } from '@angular/core';
import { CookiesComponent } from '../cookies/cookies.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CookiesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
