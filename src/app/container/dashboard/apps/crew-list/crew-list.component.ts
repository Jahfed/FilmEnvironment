import { Component, inject } from '@angular/core';
import { Crewlist } from '../../../../interfaces/crewlist';
import { CrewdataService } from '../../../../services/crewservices/crewdata.service';

@Component({
  selector: 'crew-list',
  standalone: true,
  imports: [],
  templateUrl: './crew-list.component.html',
  styleUrl: './crew-list.component.css'
})
export class CrewListComponent {

  crewList: Crewlist[] = [];
  crewService: CrewdataService = inject(CrewdataService);

  constructor() {
    this.crewService.getAllCrewData().then((crewList: Crewlist[]) => {
      this.crewList = crewList;
    }).catch(error => { console.log(error); });
  }

}
