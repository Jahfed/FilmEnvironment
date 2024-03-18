import { Injectable } from '@angular/core';
import { Crewlist } from '../../interfaces/crewlist';

@Injectable({
  providedIn: 'root'
})

export class CrewdataService {
  readonly baseUrlAvatars: string = "../assets/images/profilePictures/";
  crewlist: Crewlist[] = [
    {
      id: 1,
      firstname: "Jabson",
      lastname: "Smith",
      birthday: "22-02-1985",
      function: "Location Manager",
      city: "Amsterdam",
      country: "Netherlands",
      address: "LastLane 15B, 3000AA",
      phonenumbers: ["0622222222", "", "0634563456", ""],
      emails: [],
      socialmedias: ["", "Facebook", "Instagram", "LinkedIn", ""],
      website: `${this.baseUrlAvatars}jahfed.jpg`,
      avatar: `${this.baseUrlAvatars}jahfed.jpg`
    },
    {
      id: 2,
      firstname: "John",
      lastname: "Doe",
      birthday: "12-05-1978",
      function: "Director",
      city: "Los Angeles",
      country: "United States",
      address: "123 Hollywood Blvd",
      phonenumbers: ["", "0612345678", "", ""],
      emails: ["john.doe@example.com"],
      socialmedias: ["Twitter", "", "LinkedIn", "", ""],
      website: `${this.baseUrlAvatars}johndoe.jpg`,
      avatar: `${this.baseUrlAvatars}johndoe.jpg`
    },
    {
      id: 3,
      firstname: "Emily",
      lastname: "Johnson",
      birthday: "03-09-1990",
      function: "Cinematographer",
      city: "London",
      country: "United Kingdom",
      address: "27 Film St.",
      phonenumbers: ["", "", "", "0678901234"],
      emails: ["emily.j@example.com"],
      socialmedias: ["", "", "Instagram", "", ""],
      website: `${this.baseUrlAvatars}emilyj.jpg`,
      avatar: `${this.baseUrlAvatars}emilyj.jpg`
    },
    {
      id: 4,
      firstname: "Sarah",
      lastname: "Brown",
      birthday: "17-11-1982",
      function: "Costume Designer",
      city: "Paris",
      country: "France",
      address: "5 Rue de Mode",
      phonenumbers: ["", "", "0654321098", ""],
      emails: ["sarah.b@example.com"],
      socialmedias: ["", "Facebook", "", "", "Snapchat"],
      website: `${this.baseUrlAvatars}sarahb.jpg`,
      avatar: `${this.baseUrlAvatars}sarahb.jpg`
    },
    {
      id: 5,
      firstname: "Michael",
      lastname: "Smith",
      birthday: "28-08-1976",
      function: "Producer",
      city: "New York",
      country: "United States",
      address: "789 Broadway",
      phonenumbers: ["", "", "", "0654321987"],
      emails: ["michael.s@example.com"],
      socialmedias: ["", "Twitter", "", "", "LinkedIn"],
      website: `${this.baseUrlAvatars}michaels.jpg`,
      avatar: `${this.baseUrlAvatars}michaels.jpg`
    },
    {
      id: 6,
      firstname: "Emma",
      lastname: "Davis",
      birthday: "09-12-1988",
      function: "Production Designer",
      city: "Sydney",
      country: "Australia",
      address: "10 Filmset Ave",
      phonenumbers: ["", "", "0612345678", ""],
      emails: ["emma.d@example.com"],
      socialmedias: ["", "", "Instagram", "", ""],
      website: `${this.baseUrlAvatars}emmad.jpg`,
      avatar: `${this.baseUrlAvatars}emmad.jpg`
    },
    {
      id: 7,
      firstname: "Alex",
      lastname: "Robinson",
      birthday: "15-03-1995",
      function: "Script Supervisor",
      city: "Toronto",
      country: "Canada",
      address: "123 Script St.",
      phonenumbers: ["0612345678", "", "", ""],
      emails: ["alex.r@example.com"],
      socialmedias: ["Facebook", "", "", "", "Snapchat"],
      website: `${this.baseUrlAvatars}alexr.jpg`,
      avatar: `${this.baseUrlAvatars}alexr.jpg`
    },
    {
      id: 8,
      firstname: "Sophie",
      lastname: "Martinez",
      birthday: "20-07-1983",
      function: "Makeup Artist",
      city: "Berlin",
      country: "Germany",
      address: "Makeup Plaza 7",
      phonenumbers: ["", "", "", "0654321765"],
      emails: ["sophie.m@example.com"],
      socialmedias: ["", "", "", "LinkedIn", ""],
      website: `${this.baseUrlAvatars}sophiem.jpg`,
      avatar: `${this.baseUrlAvatars}sophiem.jpg`
    },
    {
      id: 9,
      firstname: "David",
      lastname: "Lee",
      birthday: "02-04-1974",
      function: "Sound Mixer",
      city: "Tokyo",
      country: "Japan",
      address: "Sound Way 3-5",
      phonenumbers: ["", "", "0612345678", ""],
      emails: ["david.l@example.com"],
      socialmedias: ["", "", "Instagram", "", ""],
      website: `${this.baseUrlAvatars}davidl.jpg`,
      avatar: `${this.baseUrlAvatars}davidl.jpg`
    },
    {
      id: 10,
      firstname: "Rachel",
      lastname: "Garcia",
      birthday: "11-09-1989",
      function: "Assistant Director",
      city: "Mexico City",
      country: "Mexico",
      address: "AD St. 25",
      phonenumbers: ["", "0612345678", "", ""],
      emails: ["rachel.g@example.com"],
      socialmedias: ["", "Twitter", "", "", ""],
      website: `${this.baseUrlAvatars}rachelg.jpg`,
      avatar: `${this.baseUrlAvatars}rachelg.jpg`
    },
    {
      id: 11,
      firstname: "Daniel",
      lastname: "White",
      birthday: "29-06-1980",
      function: "Editor",
      city: "Los Angeles",
      country: "United States",
      address: "Edit Way 12",
      phonenumbers: ["", "", "0654321987", ""],
      emails: ["daniel.w@example.com"],
      socialmedias: ["", "Facebook", "", "", ""],
      website: `${this.baseUrlAvatars}danielw.jpg`,
      avatar: `${this.baseUrlAvatars}danielw.jpg`
    },
    {
      id: 12,
      firstname: "Laura",
      lastname: "Taylor",
      birthday: "14-01-1993",
      function: "Costume Assistant",
      city: "Paris",
      country: "France",
      address: "2 Rue de Mode",
      phonenumbers: ["", "", "0612345678", ""],
      emails: ["laura.t@example.com"],
      socialmedias: ["", "", "", "LinkedIn", ""],
      website: `${this.baseUrlAvatars}laurat.jpg`,
      avatar: `${this.baseUrlAvatars}laurat.jpg`
    },
    {
      id: 13,
      firstname: "Mark",
      lastname: "Thompson",
      birthday: "08-03-1987",
      function: "Gaffer",
      city: "Vancouver",
      country: "Canada",
      address: "Light Ave 6",
      phonenumbers: ["0612345678", "", "", ""],
      emails: ["mark.t@example.com"],
      socialmedias: ["", "", "Instagram", "", ""],
      website: `${this.baseUrlAvatars}markt.jpg`,
      avatar: `${this.baseUrlAvatars}markt.jpg`
    },
    {
      id: 14,
      firstname: "Sophia",
      lastname: "Wilson",
      birthday: "19-10-1986",
      function: "Assistant Producer",
      city: "Sydney",
      country: "Australia",
      address: "Prod St. 9",
      phonenumbers: ["", "0612345678", "", ""],
      emails: ["sophia.w@example.com"],
      socialmedias: ["", "Twitter", "", "", ""],
      website: `${this.baseUrlAvatars}sophiaw.jpg`,
      avatar: `${this.baseUrlAvatars}sophiaw.jpg`
    },
    {
      id: 15,
      firstname: "Kevin",
      lastname: "Gomez",
      birthday: "25-06-1984",
      function: "Stunt Coordinator",
      city: "Los Angeles",
      country: "United States",
      address: "Stunt Blvd 3",
      phonenumbers: ["", "", "0654321987", ""],
      emails: ["kevin.g@example.com"],
      socialmedias: ["", "Facebook", "", "", ""],
      website: `${this.baseUrlAvatars}keving.jpg`,
      avatar: `${this.baseUrlAvatars}keving.jpg`
    }
  ];

  getAllCrewData(): Crewlist[] {
    return this.crewlist;
  }

  getAllCrewDataById(id: number): Crewlist | undefined {
    return this.crewlist.find(crew => crew.id === id);
  }


  constructor() { }
}