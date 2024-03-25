import { Component } from '@angular/core';
import { EightsPagesPipe } from '../../../../../pipes/eights-pages.pipe';
import { Url } from 'url';


@Component({
  selector: 'app-callsheet',
  standalone: true,
  imports: [EightsPagesPipe],
  templateUrl: './callsheet.component.html',
  styleUrl: './callsheet.component.css'
})
export class CallsheetComponent {

  // callsheet receivers information --> future also include emails/phonenumbers here so it can be send
  sends: { crew: string[], cast: string[], additional: string[], mail: string[] } = {
    crew: ["Diederik", "Fabienne", "Germain", "Iris", "Rolf", "Sjoerd", "Dylan", "Stijn", "Jason", "Jochem", "Kai", "Richard", "Tijn", "Timo", "Tommy", "Sterre", "Bianca", "Timothy"],
    cast: ["Joy", "Ruth", "Bart", "Aus", "Judy", "Abel"],
    additional: ["Sue (kostuum)", "Thom (grip)", "Dominique (2nd AC)"],
    mail: ["Sabine", "Boudewijn (Horizon Film)", "Julie", "Christophe (Gardner en Domm)", "Dimitri", "Katja", "Marieke", "Michel", "Suzanne", "Sylvan (art)", "Fieke", "Lara", "Iris (kostuum)", "Jacqueline (Hair&Make-up)"]
  }
  sendsList = Object.entries(this.sends);

  // invoice information
  invoice: string = "Factuuradres: HORIZON FILM, T.a.v. Productie Sphinx, Willem Fenengastraat 15, 1096BL Amsterdam. Project nr: SPX. E-mail: facturen@horizonfilm.nl";

  // all contacts to be represented --> initial could be automated from callsheet receivers and crew information

  // LEFT-side
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

  // RIGHT-side
  contacts2: { function: string, name: string, phonenumber: string, showphone: boolean }[] = [
    { function: "2nd AD", name: "Karel", phonenumber: "+06227722254", showphone: true },
    { function: "3th AD", name: "Mr Bright", phonenumber: "+06227722254", showphone: true },
    { function: "asst. production manager", name: "Myr", phonenumber: "+06227722254", showphone: true },
    { function: "Productie Assistent", name: "Trudou", phonenumber: "+06227722254", showphone: true },
    { function: "Productie Assistent", name: "Falli", phonenumber: "+06227722254", showphone: true },
    { function: "Location manager", name: "Jwismans", phonenumber: "+06227722254", showphone: true },
    { function: "Setmanager", name: "Jurow", phonenumber: "+06227722254", showphone: true }

  ]

  // IMPORTANT CALLS --> retreive from start time day and previous callsheets
  calls: { id: string, time: string, space: number }[] = [
    { id: "location", time: "06:45", space: 0 },
    { id: "make-up", time: "07:00", space: 0 },
    { id: "crewcall", time: "07:45", space: 0 },
    { id: "shooting", time: "08:00", space: 0 },
    { id: "lunch", time: "13:00", space: 1 },
    { id: "est. wrap", time: "18:30", space: 1 }
  ]

  // LOCATIONS: COMPANY MOVE CREATES A MOVE SPACE
  locations: { description: string, address: string, companymove: boolean }[] = [
    { description: "Draailocatie 1", address: "Filmweg 62, 2233AA, Delft", companymove: false },
    { description: "Materiaalwagens ", address: "Filmweg 62, 2233AA, Delft", companymove: false },
    { description: "Basecamp", address: "@Locatie", companymove: false },
    { description: "Catering/Kleding/Makeup", address: "@Basecamp", companymove: false },
    { description: "Greenroom", address: "@Basecamp", companymove: false },
    { description: "Draailocatie 2", address: "Starterweg 35, 6633XX, Groningen", companymove: true },
    { description: "Basecamp", address: "Hoekweg 5, 6633XX, Groningen", companymove: false },
  ]

  // WEATHER INFORMATION TO BE RETREIVED FROM LOCATION AND API PREDICTIONS
  weather: { sunset: string, sundown: string, weather: string, min: number, max: number } =
    { sunset: "06:11", sundown: "21:30", weather: "15% chance of rain", min: 8, max: 15 }

  //SHOOTING SCHEDULE FROM PLANNNING AND SCRIPT IMPORTED 
  scenesHead: string[] = ["SC", "SD", "I/E", "D/N", "LOCATION", "SYNOPSIS", "ID", "EXTRAS", "PGs"]
  scenesList: { id: number, scene: string, scriptday: number, intExt: string, daynight: string, location: string, synopsis: string, castid: number[], extras: number, pageEights: number, notes?: { cameraNote?: string[], artNote?: string[], makeupNote?: string[], waeponsNote?: string[], fxNote?: string[] } }[] = [
    {
      id: 1, scene: "3.01", scriptday: 2, intExt: "E", daynight: "D", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 14, pageEights: 3, notes: { cameraNote: ["moving track 8 meters"], makeupNote: ["blood and tears Erik"], waeponsNote: ["gun Erik"], fxNote: ["blood required"] }
    },
    {
      id: 1, scene: "3.02", scriptday: 2, intExt: "E", daynight: "D", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 12, pageEights: 12
    },
    {
      id: 1, scene: "3.24", scriptday: 2, intExt: "I", daynight: "N", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 0, pageEights: 1
    },
    {
      id: 1, scene: "3.46", scriptday: 2, intExt: "I", daynight: "N", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 45, pageEights: 23, notes: {
        cameraNote: ["steadyCam shot"], makeupNote: ["tears Asha"], waeponsNote: ["gun Erik"]
      }
    },
    {
      id: 1, scene: "3.01", scriptday: 2, intExt: "I", daynight: "N", location: "Street", synopsis: "Jack arrives in his van in the street", castid: [2, 4, 5], extras: 0, pageEights: 7, notes: {
        cameraNote: ["steadyCam shot"], makeupNote: ["tears Asha"]
      }
    }
  ]
  totalPages: number = this.scenesList.reduce((accumulate, currentvalue) => accumulate + currentvalue.pageEights, 0);

  // CAST SCHEDULE
  castHead: string[] = ["ID", "Actor/Actrice", "Role", "PU", "From", "By", "Call", "Loc", "KL", "MU", "Doorloop", "Set"];
  castList: { id: number, castId: number, name: string, role: string, pickUp?: string, from?: string, driver?: string, calltime: string, location: number, wardrobetime: string, makeuptime: string, blocking?: string, onSet: string }[] = [
    {
      id: 1, castId: 2, name: "Joy Jonson", role: "Asha Verdura", pickUp: "07:00", from: "House Joy", driver: "Fenna", calltime: "07:45", location: 1, wardrobetime: "07:50", makeuptime: "08:00", blocking: "", onSet: "08:20"
    },
    {
      id: 1, castId: 2, name: "Joy Jonson", role: "Asha Verdura", pickUp: "07:00", from: "House Joy", driver: "Fenna", calltime: "07:45", location: 1, wardrobetime: "07:50", makeuptime: "08:00", blocking: "", onSet: "08:20"
    },
    {
      id: 1, castId: 2, name: "Bert Mandelberg", role: "John Frusci", pickUp: "", from: "", driver: "", calltime: "07:45", location: 1, wardrobetime: "07:50", makeuptime: "08:00", blocking: "", onSet: "08:20"
    },
    {
      id: 1, castId: 2, name: "Joy Jonson", role: "Asha Verdura", pickUp: "", from: "", driver: "", calltime: "07:45", location: 1, wardrobetime: "07:50", makeuptime: "08:00", blocking: "", onSet: "08:20"
    },
    {
      id: 1, castId: 2, name: "Joy Jonson", role: "Asha Verdura", pickUp: "07:00", from: "House Joy", driver: "Fenna", calltime: "07:45", location: 1, wardrobetime: "07:50", makeuptime: "08:00", blocking: "", onSet: "08:20"
    }
  ]

  // Group all the lists to see  if later on it can be automated
  callLists: any =
    [
      [this.scenesHead, this.scenesList], [this.castHead, this.castList]
    ];


  extrasHead: string[] = ["SC", "ROLE", "CALL", "LOC", "KL/MU", "DOORLOOP", "SET"];
  extrasListExtract = this.scenesList.filter(scene => { return scene.extras > 0 });
  extrasList = this.extrasListExtract.map(extra => {
    const shootingCall = this.calls.find(call => call.id === "shooting").time;
    const crewCall = this.calls.find(call => call.id === "crewcall").time;

    return {
      sceneDescription: `description (${extra.scene})`,
      scene: extra.scene,
      roleDescription: `${extra.extras} people to play`,
      call: shootingCall ? shootingCall : null,
      location: 1,
      wardrobe: crewCall ? crewCall : null,
      blocking: "",
      onSet: shootingCall ? shootingCall : null
    };
  });

  vehicleHead: string[] = ["SC", "VOERTUIG", "LOC", "CALL", "CONTACTPERSOON", "ON SET"];
  vehicleList: { sceneId: string, amount?: number, vehicle: string, location: number, call: string, contact: string, onSet: string }[] = [
    { sceneId: "3.04", amount: 2, vehicle: "Volvo Trucks Red", location: 1, call: this.calls.find(call => call.id === "crewcall").time, contact: "via productie", onSet: this.calls.find(call => call.id === "shooting").time },
    { sceneId: "3.04", vehicle: "Volvo Trucks Red", location: 1, call: this.calls.find(call => call.id === "crewcall").time, contact: "via productie", onSet: this.calls.find(call => call.id === "shooting").time }
  ]


  notesList: { id: string, description?: string, content: string }[] = [
    {
      id: "belangrijk", description: "Belangrijke Notes!", content: "Trek warme kleding aan, het is een buiten locatie. Doe een hesje aan op locatie ivm veiligheid."
    },
    {
      id: "regie", description: "Regie Notes", content: "Er zijn 3 locatiehouders die mee kunnen spelen en begeleide in de scenes"
    },
    {
      id: "regie", description: "Regie Notes", content: "Houd rekening met extra tijd voor scene 3.04"
    },
    {
      id: "regie", description: "Regie Notes", content: "Om 15:30 is de helicopter aanwezig"
    },
    {
      id: "algemeen", description: "Algemene Notes", content: "Houd rekening met extra tijd voor scene 3.04"
    },
    {
      id: "algemeen", description: "Algemene Notes", content: "Telefoons still op de set"
    },
    {
      id: "algemeen", description: "Algemene Notes", content: "Ongewenst gedrag wordt op geen manier geaccepteerd. Mocht je willen spreken met een vertrouwenspersoon stuur een mail naar info@vertrouwen.persoon of bel 06-HR."
    },
    {
      id: "locatie", description: "Locatie Notes", content: "Schade direct melden bij productie."
    },
    {
      id: "locatie", description: "Locatie Notes", content: "Prullenbak in de daarvoor bestemde afvalbakken"
    },
    {
      id: "socials", description: "Social Media Notes", content: "Geen foto's op social media plaatsen! Verraad niet het plot."
    },
    {
      id: "production", description: "Facturen", content: "Facturen versturen voor de 13e van iedere maand. Deze worden op donderdagen verwerkt. Factuur gegevens te vinden bovenaan."
    },
    {
      id: "production", description: "Productie", content: "De opnameleider is BHV gecertificeerd"
    },
  ]

  importantNotes = this.notesList.filter(note => note.id === "belangrijk");
  directorsNotes = this.notesList.filter(note => note.id === "regie");
  commonNotes = this.notesList.filter(note => note.id === "algemeen");
  socialmediaNotes = this.notesList.filter(note => note.id === "socials");
  locationNotes = this.notesList.filter(note => note.id === "locatie");
  productionNotes = this.notesList.filter(note => note.id === "production");

  extraCrewHeader = ["FUNCTIE", "NAAM", "CALL", "CONTACTGEGEVENS"];
  extraCrewList: { function: string, name: string, phonenumber: string, showphone: boolean, call: string }[] = [
    { function: "Kostuum (ipv Sjean)", name: "Drientje Anders", phonenumber: "+06227722254", showphone: true, call: this.calls.find(call => call.id === "shooting").time },
    { function: "VFX", name: "Partian Manders", phonenumber: "+06227722254", showphone: true, call: this.calls.find(call => call.id === "crewcall").time },
    { function: "Sound (extra)", name: "Geertje Luid", phonenumber: "+06227722254", showphone: true, call: this.calls.find(call => call.id === "shooting").time }
  ]

  cameraNotes = this.scenesList.filter(scene => scene.notes && scene.notes.cameraNote);
  artNotes = this.scenesList.filter(scene => scene.notes && scene.notes.artNote);
  makeupNotes = this.scenesList.filter(scene => scene.notes && scene.notes.makeupNote);
  waeponNotes = this.scenesList.filter(scene => scene.notes && scene.notes.waeponsNote);
  fxNotes = this.scenesList.filter(scene => scene.notes && scene.notes.fxNote);

  catering: { breakfast: number[], lunch: number[], wrap: number[] } =
    {
      breakfast: [
        (this.extraCrewList.length + this.sends.crew.length),
        this.sends.cast.length,
        this.extrasList.length,
      ],
      lunch: [
        (this.extraCrewList.length + this.sends.crew.length),
        this.sends.cast.length,
        this.extrasList.length
      ],
      wrap: [
        (this.extraCrewList.length + this.sends.crew.length),
        this.sends.cast.length,
        this.extrasList.length
      ]
    }
  cateringTotals: number[] = [((this.extraCrewList.length + this.sends.crew.length) + this.sends.cast.length + this.extrasList.length), ((this.extraCrewList.length + this.sends.crew.length) + this.sends.cast.length + this.extrasList.length), ((this.extraCrewList.length + this.sends.crew.length) + this.sends.cast.length + this.extrasList.length)]
  cateringObjects = ["CREW", "CAST", "EXTRAS", "TOTAL"]
  cateringList = Object.entries(this.catering);

  locationMaps: string[] = ["../map1.jpg", "../map2.jpg"];

  hotelHeader: string[] = ["DATUM", "HOTEL", "ADDRESS", "INCHECK", "CHECKOUT", "WIE"];
  hotelList: { date: string, hotelName: string, hotelAddress: string, nights?: number, checkIn: string, checkOut: string, persons: string[] }[] =
    [{
      date: "Fri 14-01", hotelName: "Van der Valk", hotelAddress: "vd valkstraat 24, A4, Den Haag", nights: 1, checkIn: "14:00", checkOut: "12:00", persons: ["John", "Jan", "Velly", "Account"]
    }]

  transportHeader: string[] = ["CHAUFFEUR", "MOBIEL", "WIE/WAT", "PICKUP TIME", "PICK-UP LOCATION", "NAAR", "AANWEZIG OM"];
  transportSchedule: {
    driver: string,
    mobile: string,
    description: string,
    pickupTime?: string,
    pickupLocation?: string,
    destination?: string,
    arrivalTime?: string,
    transport: boolean
  }[] = [
      {
        driver: "John",
        mobile: "0633633636",
        description: "Actrice",
        pickupTime: "06:50",
        pickupLocation: "Amsterdam",
        destination: "Set",
        arrivalTime: "07:30",
        transport: true
      },
      {
        driver: "Kim",
        mobile: "0633633636",
        description: "Guide extras on set",
        transport: false
      },
      {
        driver: "Sharon",
        mobile: "0345665456",
        description: "Pick up dog Aisha",
        pickupTime: "07:00",
        pickupLocation: "Amsterdam",
        destination: "Set",
        arrivalTime: "07:50",
        transport: true
      },
      {
        driver: "John",
        mobile: "0633633636",
        description: "Actrice",
        pickupTime: "Wrap",
        pickupLocation: "Set",
        destination: "",
        arrivalTime: "",
        transport: true
      }
    ]

}
