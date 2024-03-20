import { Component } from '@angular/core';

@Component({
  selector: 'app-callsheet',
  standalone: true,
  imports: [],
  templateUrl: './callsheet.component.html',
  styleUrl: './callsheet.component.css'
})
export class CallsheetComponent {

  sends: { crew: string[], cast: string[], additional: string[], mail: string[] } = {
    crew: ["Diederik", "Fabienne", "Germain", "Iris", "Rolf", "Sjoerd", "Dylan", "Stijn", "Jason", "Jochem", "Kai", "Richard", "Tijn", "Timo", "Tommy", "Sterre", "Bianca", "Timothy"],
    cast: ["Joy", "Ruth", "Bart", "Aus", "Judy", "Abel"],
    additional: ["Sue (kostuum)", "Thom (grip)", "Dominique (2nd AC)"],
    mail: ["Sabine", "Boudewijn (Horizon Film)", "Julie", "Christophe (Gardner en Domm)", "Dimitri", "Katja", "Marieke", "Michel", "Suzanne", "Sylvan (art)", "Fieke", "Lara", "Iris (kostuum)", "Jacqueline (Hair&Make-up)"]
  }

  sendsList = Object.entries(this.sends);

  invoice: string = "Factuuradres: HORIZON FILM, T.a.v. Productie Sphinx, Willem Fenengastraat 15, 1096BL Amsterdam. Project nr: SPX. E-mail: facturen@horizonfilm.nl";

  contacts1: { function: string, name: string, phonenumber: string, showphone: boolean }[] = [
    { function: "producent", name: "Trent\nFilmhuis", phonenumber: "+06227722254", showphone: false },
    { function: "coproducent", name: "Varias en Sons", phonenumber: "+06227722254", showphone: false },
    { function: "opdrachtgever", name: "OMROEP MAX", phonenumber: "", showphone: false },
    { function: "regie", name: "Steven Spielberg", phonenumber: "+06227722254", showphone: false },
    { function: "DOP", name: "Mad Daemon", phonenumber: "+06227722254", showphone: false },
    { function: "1st AD", name: "Fellow", phonenumber: "+06227722254", showphone: false },
    { function: "line producer", name: "Sarah", phonenumber: "+06227722254", showphone: true },
    { function: "production manager", name: "Fysal", phonenumber: "+06227722254", showphone: true }

  ]

  contacts2: { function: string, name: string, phonenumber: string, showphone: boolean }[] = [
    { function: "2nd AD", name: "Karel", phonenumber: "+06227722254", showphone: true },
    { function: "3th AD", name: "Mr Bright", phonenumber: "+06227722254", showphone: true },
    { function: "asst. production manager", name: "Myr", phonenumber: "+06227722254", showphone: true },
    { function: "Productie Assistent", name: "Trudou", phonenumber: "+06227722254", showphone: true },
    { function: "Productie Assistent", name: "Falli", phonenumber: "+06227722254", showphone: true },
    { function: "Location manager", name: "Jwismans", phonenumber: "+06227722254", showphone: true },
    { function: "Setmanager", name: "Jurow", phonenumber: "+06227722254", showphone: true }

  ]

  calls: { id: string, time: string }[] = [
    { id: "location", time: "06:45" },
    { id: "make-up", time: "07:00" },
    { id: "crewcall", time: "07:45" },
    { id: "shooting", time: "08:00" },
    { id: "lunch", time: "13:00" },
    { id: "est. wrap", time: "18:30" }
  ]

  locations: { description: string, address: string, companymove: boolean }[] = [
    { description: "Draailocatie 1", address: "Filmweg 62, 2233AA, Delft", companymove: false },
    { description: "Materiaalwagens ", address: "Filmweg 62, 2233AA, Delft", companymove: false },
    { description: "Basecamp", address: "@Locatie", companymove: false },
    { description: "Catering/Kleding/Makeup", address: "@Basecamp", companymove: false },
    { description: "Greenroom", address: "@Basecamp", companymove: false },
    { description: "Draailocatie 2", address: "Starterweg 35, 6633XX, Groningen", companymove: true },
    { description: "Basecamp", address: "Hoekweg 5, 6633XX, Groningen", companymove: false },
  ]

  weather: { sunset: string, sundown: string, weather: string, min: number, max: number } =
    { sunset: "06:11", sundown: "21:30", weather: "15% chance of rain", min: 8, max: 15 }

  scenesHead: string[] = ["SC", "SD", "I/E", "D/N", "LOCATION", "SYNOPSIS", "ID", "EXTRAS", "PGs"]
  scenesList: { id: number, scene: string, scriptday: number, intExt: string, daynight: string, location: string, synopsis: string, castid: number[], extras: number, pageEights: number }[] = [
    {
      id: 1, scene: "3.01", scriptday: 2, intExt: "E", daynight: "D", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 14, pageEights: 3
    },
    {
      id: 1, scene: "3.01", scriptday: 2, intExt: "E", daynight: "D", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 14, pageEights: 3
    },
    {
      id: 1, scene: "3.01", scriptday: 2, intExt: "E", daynight: "D", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 14, pageEights: 3
    },
    {
      id: 1, scene: "3.01", scriptday: 2, intExt: "E", daynight: "D", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 14, pageEights: 3
    },
    {
      id: 1, scene: "3.01", scriptday: 2, intExt: "E", daynight: "D", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 14, pageEights: 3
    }
  ]
}
