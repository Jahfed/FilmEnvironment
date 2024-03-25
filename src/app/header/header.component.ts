import { Component, inject } from '@angular/core';
import { SearchbarComponent } from '../container/dashboard/production/searchbar/searchbar.component';
import { LoginAuthenticationService } from '../services/auth/login-authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems: string[] = ["Login", "Dashboard", "Production", "Planning"];
  isLoggedIn: string = inject(LoginAuthenticationService).checkLogin();
}
