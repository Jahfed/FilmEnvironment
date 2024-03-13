import { Component } from '@angular/core';
import { ProductionListComponent } from './production/production.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductionListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

}
