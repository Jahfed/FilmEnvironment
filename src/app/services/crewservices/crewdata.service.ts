import { Injectable } from '@angular/core';
import { Crewlist } from '../../interfaces/crewlist';

@Injectable({
  providedIn: 'root'
})

export class CrewdataService {

  url = "http://localhost:3000/crewlist";

  async getAllCrewData(): Promise<Crewlist[]> {
    // const data = await fetch(this.url);
    let data = JSON.parse('{ "data": "testdata" }');
    return await data.json() ?? [];
  }

  async getAllCrewDataById(id: number): Promise<Crewlist | undefined> {
    // const data = await fetch(`${this.url}/${id}`);
    let data = JSON.parse('{ "user": 1, "tester": 2 }');
    return await data.json() ?? {};
  }

}
