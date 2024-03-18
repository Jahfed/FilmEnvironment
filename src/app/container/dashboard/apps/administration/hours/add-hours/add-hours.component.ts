import { Component } from '@angular/core';


@Component({
  selector: 'app-add-hours',
  standalone: true,
  imports: [],
  templateUrl: './add-hours.component.html',
  styleUrl: './add-hours.component.css'
})
export class AddHoursComponent {
  date: string;
  start: string;
  end: string;
  message: string;

  hourItemInit = { id: 1, date: "2024-01-14", start: "08:00", end: "18:00" };
  hoursList: { id: number, date: string, start: string, end: string }[] = [this.hourItemInit];

  addHours(date: string, timeStart: string, timeEnd: string) {
    let check = false;
    let timeCheck = false;
    check = (date.length > 2 && timeStart.length > 2 && timeEnd.length > 2) ? true : false;
    timeCheck = (Number(timeStart.split(":")[0]) < Number(timeEnd.split(":")[0])) ||
      ((Number(timeStart.split(":")[0]) === Number(timeEnd.split(":")[0])) && (Number(timeStart.split(":")[1]) <= Number(timeEnd.split(":")[1]))) ? true : false;

    if (check && timeCheck) {
      let id = this.getHighestNewId(); //this will become a uuid
      this.hoursList.push({ id: id, date: date, start: timeStart, end: timeEnd });
    } else {
      if (timeCheck) {
        alert('please check all the fields are filled out.');
      } else {
        alert('please check if everything is filled in and start time is not earlier than end time');
      }
    }

  }

  getHighestNewId() {
    let ids: number[] = [];
    for (let item of this.hoursList) {
      ids.push(item.id);
    }
    let highestNumber: number = Math.max(...ids);
    return (highestNumber + 1);
  }

  removeHour(id: number) {
    //remove hour with id
    this.hoursList = this.hoursList.filter(hourItem => { return hourItem.id !== id });
  }
}
