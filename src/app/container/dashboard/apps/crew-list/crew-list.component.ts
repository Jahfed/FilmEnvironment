import { Component } from '@angular/core';

@Component({
  selector: 'crew-list',
  standalone: true,
  imports: [],
  templateUrl: './crew-list.component.html',
  styleUrl: './crew-list.component.css'
})
export class CrewListComponent {
  crewlist = [{
    id: 1,
    firstName: "Jahfed",
    lastName: "Wismans",
    function: "Location Manager",
    address: "Statenweg 96B03, 3039JJ, Rotterdam",
    phonenumber: ["0622722295"],
    email: ["jahfed@icloud.com", "info@jahfed.com"],
    profileUrl: "../../../../../assets/images/profilePictures/jahfed.jpg",
    kvk: ""
  }, {
    id: 2,
    firstName: "Robert",
    lastName: "Post",
    function: "Executive Producer",
    address: "Amsterdam",
    phonenumber: ["0611223344"],
    email: ["robert@post.com"],
    profileUrl: "../../../../../assets/images/profilePictures/jahfed.jpg",
    kvk: ""
  }]
}
