import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})

export class CalendarComponent {
  year: number = 2024;
  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  date = new Date()
  currentDate: string = `${this.days[this.date.getDay()]} / ${this.date.getDate()}-${this.months[this.date.getMonth()]}-${this.date.getFullYear()}`;
  currentDay: string = `${this.date.getDate()}-${this.months[this.date.getMonth()]}`;
  currentYear: number = this.date.getFullYear();

  minYear() {
    (this.year > (this.currentYear - 25)) ? this.year = this.year - 1 : this.year;
  }

  plusYear() {
    (this.year < (this.currentYear + 15)) ? this.year = this.year + 1 : this.year;
  }

  getDay(date: string, year: number) {

    let dateElements = date.split('-');
    let dateNumber = Number(dateElements[0]);
    let monthNumber = this.months.indexOf(dateElements[1]);
    let dateInfo = new Date(year, monthNumber, dateNumber);
    let day = dateInfo.getDay();
    return day;
  }

  numberOfMonthdays(year: number, month: number) {
    let getEndDay = new Date(year, month, 0).getDate();
    return getEndDay;
  }

  yearCalendar(year: number) {
    let i: number = 1;
    let dates = [];
    for (let month in this.months) {
      let monthDates = [];
      let numberOfDays = this.numberOfMonthdays(year, i);
      i++;
      for (let i = 1; i <= numberOfDays; i++) {
        monthDates.push(`${i}-${this.months[month]}`);
      }
      dates.push(monthDates);
    }
    return dates;
  }

}
