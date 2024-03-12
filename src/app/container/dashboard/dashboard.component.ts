import { Component } from '@angular/core';
import { ProductionCardComponent } from './production/production-card/production-card.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductionCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = ["one", "two", "three", "four", "five", "six", "seven"]
}
