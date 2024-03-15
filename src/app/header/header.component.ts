import { Component } from '@angular/core';
import { SearchbarComponent } from '../container/dashboard/production/searchbar/searchbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems: string[] = ["Login", "Dashboard", "Production", "Planning"];
}
