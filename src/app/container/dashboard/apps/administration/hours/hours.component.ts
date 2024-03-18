import { Component } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [],
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.css'
})
export class HoursComponent {
  crewMembers = [{ id: 5, name: "john", function: "light" }, { id: 8, name: "sabrine", function: "production" }, { id: 10, name: "otto", function: "location" }]

  hours = [
    { uid: 1, crewId: 5, productionId: 2, day: "02-02-2024", start: "08:00", end: "20:00", description: "shooting day 1" },
    { uid: 2, crewId: 8, productionId: 2, day: "02-02-2024", start: "08:00", end: "20:00", description: "shooting day 1" },
    { uid: 3, crewId: 10, productionId: 2, day: "02-02-2024", start: "08:00", end: "20:00", description: "shooting day 1" },
    { uid: 4, crewId: 5, productionId: 2, day: "05-02-2024", start: "10:00", end: "20:00", description: "prep day" }
  ]

  getCurrentMember(crewId: number) {
    let crewMember = this.crewMembers.filter((crew) => { return crew.id === crewId });
    return crewMember[0].name;
  }

  calculateHours(startTime: string, endTime: string, day: string) {
    let date = day.split('-');
    let y = Number(date[2]);
    let m = Number(date[1]);
    let d = Number(date[0]);
    let startDate = new Date(y, m, d, Number(startTime.split(':')[0]), Number(startTime.split(':')[1]));
    let endDate = new Date(y, m, d, Number(endTime.split(':')[0]), Number(startTime.split(':')[1]));

    let duration = endDate.getTime() - startDate.getTime();

    // Total number of seconds in the difference
    const totalSeconds = Math.floor(duration / 1000);

    // Total number of minutes in the difference
    const totalMinutes = Math.floor(totalSeconds / 60);

    // Total number of hours in the difference
    const totalHours = Math.floor(totalMinutes / 60);

    // Getting the number of seconds left in one minute
    const remSeconds = totalSeconds % 60;

    // Getting the number of minutes left in one hour
    const remMinutes = totalMinutes % 60;

    return `${totalHours} hours, ${remMinutes} minutes`;
  }
}
