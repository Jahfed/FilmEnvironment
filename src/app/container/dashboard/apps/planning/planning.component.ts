import { Component } from '@angular/core';
import { Planning } from '../../../../interfaces/planning';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.css'
})
export class PlanningComponent {

  planning: Planning[] = [{
    id: 1,
    shootingday: 4,
    date: new Date(2023, 11, 6),
    sceneIds: [1, 5, 7, 3]
  },
  {
    id: 1,
    shootingday: 3,
    date: new Date(2024, 4, 2),
    sceneIds: [50, 35, 24, 56]
  },
  {
    id: 1,
    date: new Date(2023, 3, 7),
    sceneIds: [35, 57, 46, 25]
  }]
}
