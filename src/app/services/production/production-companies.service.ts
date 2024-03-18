import { Injectable } from '@angular/core';
import { Productionlist } from '../../interfaces/productionlist';

@Injectable({
  providedIn: 'root'
})
export class ProductionCompaniesService {
  readonly baseUrlLogos = "../assets/images/logos/";

  productionList: Productionlist[] = [
    {
      id: 1,
      company: "Warner Bros",
      contact: "John Smith",
      kvk: "230230230230",
      btw: "NL23432923490",
      city: "Amsterdam",
      country: "Netherlands",
      address: "productionLane 3000, 2000ZZ",
      phonenumbers: ["02022222222", "", "02034563456", ""],
      emails: ["info@warner.nl", "about@warner.nl"],
      socialmedias: ["", "Facebook", "Instagram", "LinkedIn", ""],
      web: "www.warner.nl",
      logo: "url.jpg"
    },
    {
      id: 2,
      company: "DreamWorks Studios",
      contact: "Emily Johnson",
      kvk: "987654321098",
      btw: "NL98765432109",
      city: "Los Angeles",
      country: "United States",
      address: "Dream St. 123",
      phonenumbers: ["", "0312345678", "", ""],
      emails: ["contact@dreamworks.com"],
      socialmedias: ["Twitter", "", "LinkedIn", "", ""],
      web: "www.dreamworks.com",
      logo: "dreamworks_logo.jpg"
    },
    {
      id: 3,
      company: "Paramount Pictures",
      contact: "Michael Brown",
      kvk: "765432109876",
      btw: "NL76543210987",
      city: "Hollywood",
      country: "United States",
      address: "Paramount Ave. 456",
      phonenumbers: ["", "", "0456789123", ""],
      emails: ["contact@paramount.com"],
      socialmedias: ["", "Facebook", "", "", "Snapchat"],
      web: "www.paramount.com",
      logo: "paramount_logo.jpg"
    },
    {
      id: 4,
      company: "Universal Studios",
      contact: "Sophie Martinez",
      kvk: "543210987654",
      btw: "NL54321098765",
      city: "London",
      country: "United Kingdom",
      address: "Universal Street 789",
      phonenumbers: ["", "0712345678", "", ""],
      emails: ["contact@universal.co.uk"],
      socialmedias: ["", "Twitter", "", "", ""],
      web: "www.universalstudios.co.uk",
      logo: "universal_logo.jpg"
    },
    {
      id: 5,
      company: "20th Century Studios",
      contact: "David Lee",
      kvk: "123456789012",
      btw: "NL12345678901",
      city: "New York",
      country: "United States",
      address: "Century St. 20",
      phonenumbers: ["", "", "", "0789012345"],
      emails: ["contact@20thcentury.com"],
      socialmedias: ["", "", "Instagram", "", ""],
      web: "www.20thcentury.com",
      logo: "20thcentury_logo.jpg"
    },
    {
      id: 6,
      company: "Disney Studios",
      contact: "Rachel Garcia",
      kvk: "654321098765",
      btw: "NL65432109876",
      city: "Orlando",
      country: "United States",
      address: "Disney Ave. 1",
      phonenumbers: ["", "", "0567890123", ""],
      emails: ["contact@disney.com"],
      socialmedias: ["", "Facebook", "", "", "TikTok"],
      web: "www.disney.com",
      logo: "disney_logo.jpg"
    },
    {
      id: 7,
      company: "Sony Pictures",
      contact: "Daniel White",
      kvk: "987654321012",
      btw: "NL98765432101",
      city: "Tokyo",
      country: "Japan",
      address: "Sony St. 567",
      phonenumbers: ["0412345678", "", "", ""],
      emails: ["contact@sony.jp"],
      socialmedias: ["", "", "LinkedIn", "", ""],
      web: "www.sonypictures.jp",
      logo: "sony_logo.jpg"
    },
    {
      id: 8,
      company: "Lionsgate",
      contact: "Laura Taylor",
      kvk: "123456789012",
      btw: "NL12345678901",
      city: "Vancouver",
      country: "Canada",
      address: "Lion St. 5678",
      phonenumbers: ["", "0812345678", "", ""],
      emails: ["contact@lionsgate.ca"],
      socialmedias: ["", "", "", "LinkedIn", ""],
      web: "www.lionsgate.ca",
      logo: "lionsgate_logo.jpg"
    },
    {
      id: 9,
      company: "Miramax Films",
      contact: "Mark Thompson",
      kvk: "987654321012",
      btw: "NL98765432101",
      city: "Los Angeles",
      country: "United States",
      address: "Miramax Blvd. 1234",
      phonenumbers: ["", "", "0345678901", ""],
      emails: ["contact@miramax.com"],
      socialmedias: ["", "Facebook", "", "", ""],
      web: "www.miramax.com",
      logo: "miramax_logo.jpg"
    },
    {
      id: 10,
      company: "Columbia Pictures",
      contact: "Sophia Wilson",
      kvk: "654321098765",
      btw: "NL65432109876",
      city: "Sydney",
      country: "Australia",
      address: "Columbia St. 9876",
      phonenumbers: ["", "0912345678", "", ""],
      emails: ["contact@columbia.com"],
      socialmedias: ["", "Twitter", "", "", ""],
      web: "www.columbiapictures.com.au",
      logo: "columbia_logo.jpg"
    }
  ]

  getAllProductionData() {
    return this.productionList;
  }

  getAllProductionDataById(id: number) {
    return this.productionList.find(production => production.id === id);
  }

  constructor() { }
}
