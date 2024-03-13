import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'production-card',
  standalone: true,
  imports: [],
  templateUrl: './production-card.component.html',
  styleUrl: './production-card.component.css'
})
export class ProductionCardComponent {
  @Input()
  production: {
    id: number,
    type?: string,
    title: string,
    description: string,
    productionDate: string,
    isInProduction: boolean,
    isInPreProduction: boolean,
    isReleased: boolean
    productionCompany: string,
    pcompanyDetails: any,
    imageURL: string,
  }

}
