import { Component } from '@angular/core';
import { ProductionCardComponent } from './production-card/production-card.component';
import { FilterComponent } from './filter/filter.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'productions-list',
  standalone: true,
  imports: [ProductionCardComponent, FilterComponent, SearchbarComponent],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})

export class ProductionListComponent {
  productions = [{
    id: 1,
    title: "Sphinx",
    type: "serie - 6 afleverig",
    description: "Thriller for Videoland",
    productionDate: "2004",
    isInProduction: false,
    isInPreProduction: false,
    isReleased: true,
    productionCompany: "Horizon Film",
    pcompanyDetails: { email: "info@horizonfilm.nl", webpage: "www.horizonfilm.nl", address: "Admiraal de Ruijterweg 545, 1055 MK, Amsterdam" },
    imageURL: "../../assets/images/productions/production-sphinx.jpg",
  }, {
    id: 2,
    title: "Flikken Rotterdam - Seizoen 5",
    type: "serie - 10 afleveringen",
    description: "Thriller for Videoland",
    productionDate: "2004",
    isInProduction: false,
    isInPreProduction: false,
    isReleased: true,
    productionCompany: "Hollands Licht",
    pcompanyDetails: { email: "info@hollandslichtproducties.nl", webpage: "www.hollandslichtproducties.nl", address: "Hollands Licht Producties, Willem Fenengastraat 14, 1096 BN Amsterdam" },
    imageURL: "../../assets/images/productions/production-flikkenRotterdam5.jpg",
  }, {
    id: 3,
    title: "Sphinx",
    description: "Thriller for Videoland",
    productionDate: "2004",
    isInProduction: true,
    isInPreProduction: false,
    isReleased: false,
    productionCompany: "Horizon Film",
    pcompanyDetails: { email: "info@horizonfilm.nl", webpage: "www.horizonfilm.nl", address: "Admiraal de Ruijterweg 545, 1055 MK, Amsterdam" },
    imageURL: "../../assets/images/productions/production-sphinx.jpg",
  }]

  totalProductions = this.productions.length;
  totalInProduction = this.productions.filter(x => (x.isInProduction || x.isInPreProduction)).length;
  totalReleased = this.productions.filter(x => x.isReleased).length;
  selectedFilter: string = "all";

  onFilterChanged(value: string) {
    console.log(value);
    this.selectedFilter = value;
  }


}
