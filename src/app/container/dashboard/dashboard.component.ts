import { Component } from '@angular/core';
import { ProductionListComponent } from './production/production.component';
import { CrewListComponent } from './apps/crew-list/crew-list.component';
import { ScriptreaderComponent } from './preproduction/scriptreader/scriptreader.component';
import { SearchbarComponent } from './production/searchbar/searchbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductionListComponent, CrewListComponent, ScriptreaderComponent, SearchbarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

}
